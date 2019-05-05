// @flow strict

import { createStore } from './epicsFlow'
import { storeConfig } from './storeConfig'

// eslint-disable-next-line no-undef
global.$appSetup = (ctx) => {
	if (ctx.store) {
		ctx.store.replaceConfig(storeConfig)
		ctx.store.recreateEffects()
	} else {
		ctx.store = createStore<typeof storeConfig.epics>(storeConfig)
	}

	return () => {
		ctx.store.destroyEffects()
	}
}