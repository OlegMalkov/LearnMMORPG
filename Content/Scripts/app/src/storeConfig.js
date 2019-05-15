// @flow strict
import {
	createEpic,
	createUpdater,
	makeSimpleCommand,
	type CreateStorePropsType,
	storeCreatedEvent,
	createSimpleUpdater,
} from './epicsFlow'
import {
	actorsEM,
	queryWorldActorsEC,
	createTextActorEC,
	WorldActorsEvent,
	updateTextActorEC,
	bootBrowserEC,
} from './actorsEM'
import './browser/browser'

const IncEvent = makeSimpleCommand('INC')

const storeConfig: CreateStorePropsType<*> = {
	epics: {
		test: createEpic<number, *, *>({
			initialState: 2,
			vcet: 'TEST',
			updaters: {
				storeCreated: createUpdater({
					given: {},
					when: { inc: storeCreatedEvent.condition },
					then: ({R}) => R
						.sideEffect(bootBrowserEC('./app/src/browser/browser.dist.js'))
						.sideEffect(queryWorldActorsEC())
						.sideEffect(createTextActorEC({ actorId: 'text1', text: 'initialized' })),
				}),
				worldActors: createSimpleUpdater(
					WorldActorsEvent.condition,
					({ R, value }) => R
						.sideEffect(updateTextActorEC({ actorId: 'text1', text: `Actors: ${value.actors.map(a => a.GetName()).join(',')}` }))
				),

			},
		}),
	},
	effectManagers: {
		actors: actorsEM,
	},
	// $FlowFixMe
	debug: Boolean(process.env.NODE_ENV !== 'test' || process.env.TRACE),
}

export {
	IncEvent,
	storeConfig,
}
