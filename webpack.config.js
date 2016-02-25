var path = require('path');
var webpack = require('webpack');

// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
		bundle: './src/js/main.js'
	},
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
				exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file" }
        ]
    },
    stats: {
		progress: true,
        colors: true,
		watch: true
    },
    devtool: 'source-map'
};
	// plugins: [
		// commonsPlugin,
		// new HtmlWebpackPlugin({ inject: 'head', title: 'My Test Game' })
	//],


