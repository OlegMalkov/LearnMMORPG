// @flow strict
import { createEpic, storeCreatedEvent, createUpdater, type CreateStorePropsType } from '../epicsFlow'
import {
	requestAnimationFrameEC,
	type RequestAnimationFrameEffectType,
	animationFrame,
	requestAnimationFrameEM,
} from '../requestAnimationFrameEM'

const coreEpic = createEpic<{| count: number |}, RequestAnimationFrameEffectType, void>({
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
			then: ({ R }) => {
				return R
					.mapState(state => ({ ...state, count: state.count + 1}))
					.sideEffect(requestAnimationFrameEC())
			},
		}),
	},
})

const browserStoreConfig: CreateStorePropsType<*> = {
	epics: {
		core: coreEpic,
	},
	effectManagers: {
		requestAnimationFrameEM,
	},
}

export {
	browserStoreConfig,
}
