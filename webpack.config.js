const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const postcssCustomProperties = require('postcss-custom-properties');
const path = require('path');

module.exports = (env, argv) => ({ 
    watch: (argv.mode === 'development'),   
    context: path.resolve(__dirname),
    optimization: {
        minimize: (argv.mode !== 'development'),
        minimizer: [ new TerserPlugin() ],
    },
    entry:  {
        scripts: [
            '@babel/polyfill',
            path.resolve(__dirname, './assets/src/js/index.js')
        ]
    },
    output: {       
        path: path.join(__dirname, './bundle'),
        filename: '[name].js',
    },
    devtool: (argv.mode === 'development') ? 'cheap-module-source-map' : false,
    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: ['babel-loader']
            },
            /*{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },*/
            {
				test: /\.(less|css)$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						
						options: {
							sourceMap: true,
							modules: true,
							localIdentName: "[local]___[hash:base64:5]"
						}
					},
					{
						loader: "less-loader"
					}
				]
			},
            { test: /\.(ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader', options: {name: '[name].[ext]'}, }, 
            { test: /\.(woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader', options: {name: 'fonts/[name].[ext]'}, }, 
            { test: /\.(jpg|gif|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader', options: {name: 'images/[name].[ext]'}, }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'styles.css'}),
        new OptimizeCssAssetsPlugin(),
    ] 
});