const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = (env, argv) => {
	process.env.NODE_ENV = argv.mode
	const isProd = argv.mode === 'production'

	return {
		context: path.join(__dirname, 'src'),
		devServer: {
			historyApiFallback: true,
			compress: true,
		},
		devtool: isProd ? '' : 'inline-source-map',
		entry: [
			'./app.js',
		],
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
					test: /\.(png|jpg|gif|woff|woff2|ttf|svg|pdf)$/,
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'static/assets',
						publicPath: 'static/assets',
					},
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						{ loader: 'css-loader', options: { url: false } },
					],
				},
			],
		},
		optimization: {
			runtimeChunk: 'single',
			splitChunks: {
				chunks: 'all',
			},
		},
		output: {
			path: path.join(__dirname, 'www'),
			filename: '[name].bundle.js',
			chunkFilename: '[name].bundle.js',
			publicPath: '/',
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'src/app.html'),
				filename: 'index.html',
				hash: isProd,
				favicon: 'static/favicon.ico',
			}),
			new CompressionPlugin({
				cache: true,
				test: /\.(js|png|css|jpg|jpeg|gif|svg|ico|xml|woff|woff2|ttf|otf|eot)$/,
				deleteOriginalAssets: false,
			}),
			// new BundleAnalyzerPlugin(),
		],
		resolve: {
			modules: [
				'node_modules',
			],
			alias: {
				components: path.join(__dirname, 'src/components'),
				static: path.join(__dirname, 'src/static'),
				pages: path.join(__dirname, 'src/pages'),
				styles: path.join(__dirname, 'src/styles'),
				constants: path.join(__dirname, 'src/constants'),
				util: path.join(__dirname, 'src/util'),
				contexts: path.join(__dirname, 'src/contexts'),
			},
		},
		stats: {
			errorDetails: true,
			reasons: true,
		},
	}
}
