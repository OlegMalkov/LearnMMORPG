const path = require('path')

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
	entry: './browser.js',
	output: {
		filename: 'browser.dist.js',
		// eslint-disable-next-line no-undef
		path: path.resolve(__dirname),
	},
	mode: 'development',
	devtool: 'none',
}
