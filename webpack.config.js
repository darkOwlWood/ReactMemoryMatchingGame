const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    entry: path.resolve('src','index.js'),
    output: {
        path: path.resolve('dist'),
        filename: 'bundle-[fullhash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
    module: {
        rules:[
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|png|gift)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000,
                            fallback: 'file-loader',
                        },
                    }
                ]
            },
            {
                test:/\.(woff|woff2)$/,
                loader:'file-loader',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('public','index.html'),
        }),
        new webpack.DllReferencePlugin({
            manifest: path.join(__dirname,'modules-manifest.json'),
        }),
        new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve('dist','modules.js'),
            publicPath: '/',
        }),
    ]
}