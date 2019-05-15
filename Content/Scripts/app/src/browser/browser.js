// @flow
import { createStore, createEpic, storeCreatedEvent, createUpdater } from '../epicsFlow'
import {
	requestAnimationFrameEC,
	animationFrame,
	requestAnimationFrameEM,
} from '../requestAnimationFrameEM'

const browserStoreGlobalRegistryId = 'BROWSER_CONFIG'

const browserStore = global.UNode ? null : createStore<*>({
	epics: {
		core: createEpic<{ count: number }, *, *>({
			vcet: 'CORE_VCET',
			initialState: { count: 2 },
			updaters: {
				storeCreated: createUpdater({
					given: { },
					when: { _: storeCreatedEvent.condition },
					then: ({ R }) => R.sideEffect(requestAnimationFrameEC()),
				}),
				incCounter: createUpdater({
					given: { },
					when: { _: animationFrame.condition },
					then: ({ R, state }) => {
						window.location = window.location.href.substring(0, window.location.href.indexOf('#') + 1) + state.count

						return R
							.mapState(state => ({...state, count: state.count + 1}))
							.sideEffect(requestAnimationFrameEC())
					},
				}),
			},
		}),
	},
	effectManagers: {
		requestAnimationFrameEM,
	},
})

export {
	browserStoreGlobalRegistryId,
	browserStore,
}
