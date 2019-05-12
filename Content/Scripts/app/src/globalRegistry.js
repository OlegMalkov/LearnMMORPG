// @flow

const registy: Object = {}

const setGlobalRegistryRecord = (key: string, record: any) => {
	if (registy[key] !== undefined) throw new Error(`globalRegistry already has record with key "${key}"`)
	registy[key] = record
}

const getFromGlobalRegistry = (key: string) => registy[key]


export {
	setGlobalRegistryRecord,
	getFromGlobalRegistry,
}
