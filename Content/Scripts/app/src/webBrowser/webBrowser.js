// @flow strict
import { createStore } from '../epicsFlow'
import { browserStoreConfig } from './webBrowserStoreConfig'

if (global.UNode) throw new Error('browser store disabled in unreal.js')

const browserStore = createStore<typeof browserStoreConfig.epics>(browserStoreConfig)

const sendMsgToUnrealJs = (msg: MsgToUnrealJsType) => {
	window.location = window.location.href.substring(0, window.location.href.indexOf('#') + 1)
		+ encodeURIComponent(JSON.stringify(msg))
}

const browserInitialState = browserStore.getState()

let prevAppState = browserInitialState

sendMsgToUnrealJs({ type: 'INITIAL_STATE', initialState: browserInitialState })

function isNotHashMap(o) {
	return typeof o !== 'object' || Array.isArray(o)
}
function getObjectsDiff(o1, o2) {
	if (isNotHashMap(o2) || isNotHashMap(o1)) {
		if (o2 !== o1) {
			return o2
		}
		return undefined
	}
	const result = {}
	Object.keys(o2).forEach(o2k => {
		const diff = getObjectsDiff(o1, o2)
		if (diff !== undefined) {
			result[o2k] = 1
		}
	})
}
browserStore.subscribe(appState => {
	const diff = diffJson(prevAppState, appState)

	prevAppState = appState

	sendMsgToUnrealJs({ type: 'STATE_UPDATED', diff })
})

type BrowserAppStateType = typeof browserInitialState

type MsgToUnrealJsType =
| {|
	type: 'INITIAL_STATE',
	initialState: BrowserAppStateType,
|}
| {|
	type: 'STATE_UPDATED',
	diff: Object,
|}

// eslint-disable-next-line import/group-exports
export type {
	BrowserAppStateType,
	MsgToUnrealJsType,
}

// eslint-disable-next-line import/group-exports
export {
	browserStore,
}
