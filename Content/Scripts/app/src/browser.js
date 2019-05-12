// @flow
import { createStore, createEpic } from './epicsFlow'
import { setGlobalRegistryRecord } from './globalRegistry'

const browserStoreGlobalRegistryId = 'BROWSER_CONFIG'
const browserStore = createStore<*>({
	epics: {
		core: createEpic<{}, *, *>({
			vcet: 'CORE_VCET',
			initialState: {},
			updaters: {

			},
		}),
	},
})

setGlobalRegistryRecord(browserStoreGlobalRegistryId, browserStore)

export {
	browserStoreGlobalRegistryId,
	browserStore,
}
