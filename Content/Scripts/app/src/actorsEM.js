// @flow strict
import { createEffectManager } from './epicsFlow'

type TextActorStateType = {| text: string |}

type StateType = {| actorsStatesById: { [string]: TextActorStateType } |}
type ScopeType = {| actorsById: { [string]: Actor } |}

type ActorsEffectType =
	{| cmd: 'CREATE_TEXT_ACTOR', type: typeof requestType, actorId: string, text: string |}
	| {| cmd: 'UPDATE_TEXT_ACTOR', type: typeof requestType, actorId: string, text?: string |}

const requestType: 'actors_effect' = 'actors_effect'
const createTextActorEC = ({ actorId, text }: {| actorId: string, text: string |}): ActorsEffectType =>
	({ type: requestType, cmd: 'CREATE_TEXT_ACTOR', actorId, text })
const updateTextActorEC = ({ actorId, text }: {| actorId: string, text?: string |}): ActorsEffectType =>
	({ type: requestType, cmd: 'UPDATE_TEXT_ACTOR', actorId, text })

const createTextActor = ({ text }) => {
	const actor = new TextRenderActor(GWorld,Vector.Vector_Zero(),Rotator.MakeRotator(0,0,180))

	actor.TextRender.SetText(text)
	return actor
}

const actorsEM = createEffectManager<ActorsEffectType, StateType, ScopeType>({
	requestType,
	initialState: { actorsStatesById: {} },
	initialScope: { actorsById: {} },
	onEffectRequest: ({ effect, requesterEpicVcet, state, scope, R }) => {
		const makeActorId = (actorId) => `${requesterEpicVcet}_${actorId}`

		switch (effect.cmd) {
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

			console.log('actor id', Object.keys(scope.actorsById).length)
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
		console.log('effects destroyed2', Object.keys(scope.actorsById).length)
	},
	recreateEffects: ({ state, scope }) => {
		console.log('recre state.actorsStatesById', Object.keys(state.actorsStatesById))
		Object.keys(state.actorsStatesById).forEach(actorId => {
			scope.actorsById[actorId] = createTextActor({ text: state.actorsStatesById[actorId].text })
		})
		console.log('effects recreated', Object.keys(scope.actorsById).length)
	},
})


export type { // eslint-disable-line import/group-exports
	ActorsEffectType,
}

export { // eslint-disable-line import/group-exports
	createTextActorEC,
	updateTextActorEC,
	actorsEM,
}
