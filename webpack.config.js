const path = require('path')

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: [
		'./app.js',
	],
	output: {
		path: path.join(__dirname, 'www'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	stats: {
		errorDetails: true,
		reasons: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/react',
								'@babel/preset-env',
							],
						},
					},
				],
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
			},
			{
				test: /\.(png|jpg|gif|woff|woff2|ttf|svg)$/,
				loader: 'url-loader?limit=8192',
			},
		],
	},
	resolve: {
		modules: [
			path.join(__dirname, 'node_modules'),
		],
		alias: {
			components: path.join(__dirname, 'src/components'),
			static: path.join(__dirname, 'src/static'),
			pages: path.join(__dirname, 'src/pages'),
			styles: path.join(__dirname, 'src/styles'),
			constants: path.join(__dirname, 'src/constants'),
		},
	},
}
