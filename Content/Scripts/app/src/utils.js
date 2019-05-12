global.ok = (o, seen = [], level = 0) => {
	if (typeof o !== 'object') return `${typeof o}\n`

	const pads = level * 16

	if (seen.indexOf(o) !== -1) return '$cd\n'.padStart(pads)
	seen.push(o)
	const keys = []

	for (const i in o) {
		keys.push(i)
	}

	if (keys.length === 0) return 'object with 0 keys\n'
	return keys.map(k => `${k}: \n${global.ok(o[k], seen, level + 1)}`).join('\n')
}

global.okf = (o) => {
	const keys = []

	for (const k in o) {
		if (typeof o[k] === 'function')	keys.push(k)
	}

	return keys.join('\n  \n')
}
