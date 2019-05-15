const file1 = require('flowgen').compiler.compileDefinitionFile('../typings/_part_0_ue.d.ts')
const file2 = require('flowgen').compiler.compileDefinitionFile('../typings/_part_1_ue.d.ts')
const file3 = require('flowgen').compiler.compileDefinitionFile('../typings/ue.d.ts')
const { beautify } = require('flowgen')
const typeDefinitions = []

const prefix = 'declare type '
const prefixLength = prefix.length

String.prototype.process = function() {
	let r = this
		.replace('([key, value]) => `{[key: ${_index.default.node.printType(key)}]: ${_index.default.node.printType(value)}}`: "Record",', '')
		// .replace('static RenameAsset(Asset: UObject, NewName: string): void;', '')
		.replace(new RegExp('Class\\[\\];', 'g'), 'Class<any>[];')
		.replace(new RegExp('Class;', 'g'), 'Class<any>;')
		.replace(new RegExp('Class,', 'g'), 'Class<any>,')
		.replace(new RegExp('Class\\)', 'g'), 'Class<any>)')

	r = typeDefinitions.reduce((r,s) => r.replace(new RegExp(`declare var ${s}`, 'g'), `declare var_${s}V`), r)

	r = typeDefinitions.reduce((r,s) => r.replace(new RegExp(` ${s}`, 'g'), ` ${s}T`), r)

	r = typeDefinitions.reduce((r,s) => r.replace(new RegExp(`declare var_${s}V`, 'g'), `declare var ${s}`), r)

	r = beautify(r)

	r = r.replace('  RenameAsset(Asset: UObject, NewName: string): void;', '')
	r = r.replace('declare module "global"', 'declare module \'global\'')

	while (r.indexOf('UnrealEngineClassT<any>') !== -1) {
		r = r.replace('UnrealEngineClassT<any>', 'UnrealEngineClassT')
	}

	return r
}

function getAllTypes(s) {
	while (s) {
		const indexOfNextType = s.indexOf(prefix) + prefixLength

		if (s.indexOf(prefix) === -1) return
		const indexOfTypeEnd = s.indexOf(' ', indexOfNextType)
		const type = s.substring(indexOfNextType, indexOfTypeEnd)

		typeDefinitions.push(type)
		// eslint-disable-next-line no-param-reassign
		s = s.substring(indexOfTypeEnd + 1)
	}
}

getAllTypes(file1)
getAllTypes(file2)
getAllTypes(file3)

require('fs').writeFileSync('flowtyped/ue0.flow.js', file1.process())
require('fs').writeFileSync('flowtyped/ue1.flow.js', file2.process())
require('fs').writeFileSync('flowtyped/ue.flow.js', file3.process())
