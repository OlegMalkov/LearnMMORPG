// @flow strict
import { createEffectManager, makeEvent, type EpicsStoreType } from './epicsFlow'
import { getFromGlobalRegistry } from './globalRegistry'

type TextActorStateType = {| text: string |}

declare var web_browser_C: any

type WebBrowserType = {| ExecuteJavascript: string => void |}
type WebBrowserWidgetType = {|
	chromium_instance: WebBrowserType,
	AddToViewport: () => void,
	RemoveFromViewport: () => void,
	Destruct: () => void,
|}

type StateType = {|
	actorsStatesById: { [string]: TextActorStateType },
	webBrowser: {| type: 'notloaded' |} | {|
		type: 'loaded',
		browserStoreRegistryId: string,
		storeServiceState: Object,
	|},
|}

type ScopeType = {|
	actorsById: { [string]: Actor },
	webBrowser: {| type: 'notloaded' |} | {|
		type: 'loaded',
		unsubscribeFromBrowserStoreDispatch: () => any,
		widget: WebBrowserWidgetType,
		store: EpicsStoreType<Object>,
	|},
|}

type ActorsEffectType =
	{| cmd: 'CREATE_TEXT_ACTOR', type: typeof requestType, actorId: string, text: string |}
	| {| cmd: 'UPDATE_TEXT_ACTOR', type: typeof requestType, actorId: string, text?: string |}
	| {| cmd: 'QUERY_WORLD_ACTORS', type: typeof requestType |}
	| {| cmd: 'BOOT_BROWSER', type: typeof requestType, browserStoreRegistryId: string |}

const requestType: 'actors_effect' = 'actors_effect'
const createTextActorEC = ({ actorId, text }: {| actorId: string, text: string |}): ActorsEffectType =>
	({ type: requestType, cmd: 'CREATE_TEXT_ACTOR', actorId, text })
const updateTextActorEC = ({ actorId, text }: {| actorId: string, text?: string |}): ActorsEffectType =>
	({ type: requestType, cmd: 'UPDATE_TEXT_ACTOR', actorId, text })
const queryWorldActorsEC = (): ActorsEffectType =>
	({ type: requestType, cmd: 'QUERY_WORLD_ACTORS' })
const bootBrowserEC = (browserStoreRegistryId: string): ActorsEffectType =>
	({ type: requestType, cmd: 'BOOT_BROWSER', browserStoreRegistryId })

const WorldActorsEvent = makeEvent<{| actors: Array<Actor> |}>('WORLD_ACTORS')

const createTextActor = ({ text }) => {
	const actor = new TextRenderActor(GWorld,Vector.Vector_Zero(),Rotator.MakeRotator(0,0,180))

	actor.TextRender.SetText(text)
	return actor
}

const initBrowserScope = ({ store }) => {
	const webBrowserScope = {
		type: 'loaded',
		unsubscribeFromBrowserStoreDispatch: store.subscribeOnDispatch(msg => {

		}),
		widget: (GWorld.Create(web_browser_C, GWorld.GetPlayerController(0)): any),
		store,
	}

	webBrowserScope.widget.AddToViewport()
	setTimeout(() => {
		const result = webBrowserScope.widget.chromium_instance.ExecuteJavascript(`
			document.body.innerHTML='<html style="width: 100%;height: 100%;"><head></head><body style="width:100%;height:100%"><div style="width:100%;height:100%;background:pink;"></div></body></html>'
			return 2 + 2;
		`)
		console.log('result', webBrowserScope.widget.chromium_instance.ExecuteJavascript('2 + 2'))
	}, 1000)

	return webBrowserScope
}

const initBrowserStore = ({ scope, browserStoreRegistryId }) => {
	const store: EpicsStoreType<any> = getFromGlobalRegistry(browserStoreRegistryId)

	if (!store) throw new Error(`browserStore with id "${browserStoreRegistryId}" should be set to global registry before booting browser`)

	scope.webBrowser = initBrowserScope({ store })

	return store
}

const actorsEM = createEffectManager<ActorsEffectType, StateType, ScopeType>({
	requestType,
	initialState: { actorsStatesById: {}, webBrowser: { type: 'notloaded' } },
	initialScope: { actorsById: {}, webBrowser: { type: 'notloaded' } },
	onEffectRequest: ({ effect, requesterEpicVcet, state, scope, R, dispatch }) => {
		const makeActorId = (actorId) => `${requesterEpicVcet}_${actorId}`

		switch (effect.cmd) {
		case 'BOOT_BROWSER': {
			const { browserStoreRegistryId } = effect
			const store = initBrowserStore({ scope, browserStoreRegistryId })

			return R.mapState(() => ({
				...state,
				webBrowser: {
					type: 'loaded',
					browserStoreRegistryId,
					storeServiceState: store._getServiceState(),
				},
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
				unsubscribeFromBrowserStoreDispatch,
			} = webBrowser

			widget.RemoveFromViewport()
			widget.Destruct()
			unsubscribeFromBrowserStoreDispatch()
		}
	},
	recreateEffects: ({ state, scope }) => {
		Object.keys(state.actorsStatesById).forEach(actorId => {
			scope.actorsById[actorId] = createTextActor({ text: state.actorsStatesById[actorId].text })
		})
		const { webBrowser } = state

		if (webBrowser.type === 'loaded') {
			const { browserStoreRegistryId, storeServiceState } = webBrowser
			const store = initBrowserStore({ scope, browserStoreRegistryId })

			store._setState(storeServiceState)
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
