const path = require('path')
const fs = require('fs')

const PostCompile = require('post-compile-webpack-plugin')

const hotReloadCode = `
(function (global) {
	"use strict"
  
	try {
		module.exports = (obj) => {
			global.$appCtx = global.$appCtx || {}
			let cleanup;
			process.nextTick(() => {
				cleanup = global.$appSetup(global.$appCtx);
			});
  
			return () => cleanup()
		}
	}
	catch (e) {
		require('bootstrap')('app.dist.js')
	}
  })(this)`

// eslint-disable-next-line no-undef
module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env', '@babel/flow'],
					},
				},
			},
		],
	},
	entry: './src/index.js',
	output: {
		filename: 'app.dist.js',
		// eslint-disable-next-line no-undef
		path: path.resolve(__dirname, '..'),
	},
	mode: 'development',
	devtool: 'none',
	externals: {
		devrequire: 'commonjs devrequire',
		bootstrap: 'commonjs bootstrap',
		UMG: 'commonjs UMG',
		uclass: 'commonjs uclass',
		instantiator: 'commonjs instantiator',
		fs: 'commonjs fs',
	},
	plugins: [
		new PostCompile(({ compilation }) => {
			const pathToBundle = path.resolve(compilation.outputOptions.path, compilation.outputOptions.filename)

			if (fs.readFileSync(pathToBundle).indexOf('require(\'bootstrap\')(\'app.dist.js\')') === -1) {
				fs.appendFileSync(pathToBundle, hotReloadCode)
			}
		}),
	],
}
