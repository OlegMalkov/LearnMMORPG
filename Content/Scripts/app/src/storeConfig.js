// @flow strict
import { createEpic, createUpdater, makeSimpleCommand, type CreateStorePropsType } from './epicsFlow'
import { createTextActorEpic } from './actors'
import { actorsEM } from './actorsEM'

const IncEvent = makeSimpleCommand('INC')

const storeConfig: CreateStorePropsType<*> = {
	epics: {
		test: createEpic<number, *, *>({
			initialState: 2,
			vcet: 'TEST',
			updaters: {
				inc: createUpdater({
					given: {},
					when: { inc: IncEvent.condition },
					then: ({R}) => R.mapState(i => i + 1),
				}),
			},
		}),
		text: createTextActorEpic({ vcet: 'TEXT', text: 'Hello' }),
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
