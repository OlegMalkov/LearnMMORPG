// @flow strict
import { createEffectManager, makeEvent } from './epicsFlow'
import { merge } from 'diff/lib/patch/merge'
import { type MsgToUnrealJsType, type BrowserAppStateType } from './webBrowser/webBrowser'

type TextActorStateType = {| text: string |}

declare var web_browser_C: any

type WebBrowserType = {| ExecuteJavascript: string => void |}
type WebBrowserWidgetType = {|
	chromium_instance: WebBrowserType,
	AddToViewport: () => void,
	RemoveFromViewport: () => void,
	Destruct: () => void,
|}
type WebBrowserStateType = {| type: 'notloaded' |} | {|
	type: 'loaded',
	scriptFilePath: string,
|}

type StateType = {|
	actorsStatesById: { [string]: TextActorStateType },
	webBrowser: WebBrowserStateType,
|}

type WebBrowserScopeType = {| type: 'notloaded' |} | {|
	type: 'loaded',
	widget: WebBrowserWidgetType,
	setContentTimeoutId: number,
|}

type ScopeType = {|
	actorsById: { [string]: Actor },
	webBrowser: WebBrowserScopeType,
|}

type ActorsEffectType =
	{| cmd: 'CREATE_TEXT_ACTOR', type: typeof requestType, actorId: string, text: string |}
	| {| cmd: 'UPDATE_TEXT_ACTOR', type: typeof requestType, actorId: string, text?: string |}
	| {| cmd: 'QUERY_WORLD_ACTORS', type: typeof requestType |}
	| {| cmd: 'BOOT_BROWSER', type: typeof requestType, scriptFilePath: string |}

const requestType: 'actors_effect' = 'actors_effect'
const createTextActorEC = ({ actorId, text }: {| actorId: string, text: string |}): ActorsEffectType =>
	({ type: requestType, cmd: 'CREATE_TEXT_ACTOR', actorId, text })
const updateTextActorEC = ({ actorId, text }: {| actorId: string, text?: string |}): ActorsEffectType =>
	({ type: requestType, cmd: 'UPDATE_TEXT_ACTOR', actorId, text })
const queryWorldActorsEC = (): ActorsEffectType =>
	({ type: requestType, cmd: 'QUERY_WORLD_ACTORS' })
const bootBrowserEC = (scriptFilePath: string): ActorsEffectType =>
	({ type: requestType, cmd: 'BOOT_BROWSER', scriptFilePath })

const WorldActorsEvent = makeEvent<{| actors: Array<Actor> |}>('WORLD_ACTORS')

const createTextActor = ({ text }) => {
	const actor = new TextRenderActor(GWorld,Vector.Vector_Zero(),Rotator.MakeRotator(0,0,180))

	actor.TextRender.SetText(text)
	return actor
}
const fs = require('fs')

const initBrowserScope = ({ scriptFilePath }): WebBrowserScopeType => {
	const browserScript = fs.readFileSync(scriptFilePath)

	const webBrowserScope = {
		type: 'loaded',
		widget: (GWorld.Create(web_browser_C, GWorld.GetPlayerController(0)): any),
		setContentTimeoutId: setTimeout(() => {
			webBrowserScope.widget.chromium_instance.OnUrlChanged = (url) => {
				try {
					const msg: MsgToUnrealJsType = JSON.parse(decodeURIComponent(url.substring(url.indexOf('#') + 1)))

					console.log('msg received', msg)
					switch (msg.type) {
					case 'INITIAL_STATE':
						console.log('initial state')
						break
					case 'STATE_UPDATED':
						console.log('STATE_UPDATE')
						break
					default:
						// eslint-disable-next-line no-unused-expressions
						(msg: empty)
						break
					}
				} catch (e) {
					console.log('failed to decode msg', e)
				}
			}

			// webBrowserScope.widget.chromium_instance.ExecuteJavascript('window.location += "#1"')

			webBrowserScope.widget.chromium_instance.ExecuteJavascript(`
				document.body.innerHTML='<html style="width: 100%;height: 100%;"><head></head><body style="width:100%;height:100%"><div style="width:100%;height:100%;background:pink;"></div></body></html>'
			`)

			webBrowserScope.widget.chromium_instance.ExecuteJavascript(browserScript)

			webBrowserScope.widget.SetVisibility('visible')
		}, 3000),
	}

	webBrowserScope.widget.AddToViewport()
	webBrowserScope.widget.SetVisibility('hidden')


	console.log('-------browserScript', scriptFilePath, browserScript)

	return webBrowserScope
}

const actorsEM = createEffectManager<ActorsEffectType, StateType, ScopeType>({
	requestType,
	initialState: { actorsStatesById: {}, webBrowser: { type: 'notloaded' } },
	initialScope: { actorsById: {}, webBrowser: { type: 'notloaded' } },
	onEffectRequest: ({ effect, requesterEpicVcet, state, scope, R, dispatch }) => {
		const makeActorId = (actorId) => `${requesterEpicVcet}_${actorId}`

		switch (effect.cmd) {
		case 'BOOT_BROWSER': {
			const webBrowserScope = initBrowserScope({ scriptFilePath: effect.scriptFilePath })

			scope.webBrowser = webBrowserScope

			return R.mapState(() => ({
				...state,
				webBrowser: { type: 'loaded', scriptFilePath: effect.scriptFilePath },
			}))
		}
		case 'QUERY_WORLD_ACTORS':
			dispatch(WorldActorsEvent.create({ actors: GWorld.GetAllActorsOfClass(StaticMeshActor).OutActors }))
			break
		case 'CREATE_TEXT_ACTOR': {
			const { actorId, text } = effect
			const id = makeActorId(actorId)

			const actor = createTextActor({ text })

			scope.actorsById[id] = actor
			return R
				.mapState(() => ({
					...state,
					actorsStatesById: {
						...state.actorsStatesById,
						[id]: { text },
					},
				}))
		}
		case 'UPDATE_TEXT_ACTOR': {
			const { actorId, text } = effect
			const id = makeActorId(actorId)

			const actor = scope.actorsById[id]

			if (actor instanceof TextRenderActor) {
				actor.TextRender.SetText(text)
				return R
					.mapState(() => ({
						...state,
						actorsStatesById: {
							...state.actorsStatesById,
							[id]: { text: text === undefined ? state.actorsStatesById[id].text : text },
						},
					}))
			} else {
				throw new Error('Can not update text of actor because it is not TextRenderActor')
			}
		}
		default:
			// eslint-disable-next-line no-unused-expressions
			(effect: empty)
		}

		return R.doNothing
	},
	destroyEffects: ({ scope }) => {
		Object.keys(scope.actorsById).forEach(actorId => scope.actorsById[actorId].K2_DestroyActor())
		scope.actorsById = {}
		const { webBrowser } = scope

		if (webBrowser.type === 'loaded') {
			const {
				widget,
				setContentTimeoutId,
			} = webBrowser

			widget.RemoveFromViewport()
			widget.Destruct()

			if (setContentTimeoutId) clearTimeout(setContentTimeoutId)
		}
	},
	recreateEffects: ({ state, scope }) => {
		Object.keys(state.actorsStatesById).forEach(actorId => {
			scope.actorsById[actorId] = createTextActor({ text: state.actorsStatesById[actorId].text })
		})
		const { webBrowser } = state

		if (webBrowser.type === 'loaded') {
			const { scriptFilePath } = webBrowser
			const webBrowserScope = initBrowserScope({ scriptFilePath })

			scope.webBrowser = webBrowserScope
		}
	},
})


export type { // eslint-disable-line import/group-exports
	ActorsEffectType,
}

export { // eslint-disable-line import/group-exports
	bootBrowserEC,
	createTextActorEC,
	updateTextActorEC,
	queryWorldActorsEC,
	actorsEM,
	WorldActorsEvent,
}
