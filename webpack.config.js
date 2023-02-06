const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/app.js',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	watch: true,
	devServer: {
		inline: true
	},
	//Add sass-loader
	module: {
		rules: [
      {
        test: /\.html$/,
        loader: "html-loader"
      },
			{
				test: /\.(scss)$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}, {
					loader: 'postcss-loader',
					options: {
						plugins: function () {
							return [ require('autoprefixer')]
						}
					}
				}]
			},
			{
				test: /\.(svg)$/,
				use: [
				  {
					loader: 'svg-url-loader',
					options: {
					  // make loader to behave like url-loader, for all svg files
					  encoding: "base64",
					},
				  },
				],
			},
			{
				test:  /\.(jpe?g|png|gif|svg)$/i,
				loader: 'file-loader',
				options: {
					name: 'img/[name].[ext]',
					publicPath: '/'
				},
			},
		]
	}
}
