const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.base'), {
	context: __dirname,

	entry: {
		'index': './src/Icon.vue',
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: 'ofcold-icon',
		libraryTarget: 'umd',
	},
});
