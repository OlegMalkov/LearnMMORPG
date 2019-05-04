// @flow strict
import { createEpic, createUpdater, makeSimpleCommand } from './epicsFlow'

const IncEvent = makeSimpleCommand('INC')

const storeConfig = {
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
	},
	// $FlowFixMe
	debug: Boolean(process.env.NODE_ENV !== 'test' || process.env.TRACE),
}

export {
	IncEvent,
	storeConfig,
}
