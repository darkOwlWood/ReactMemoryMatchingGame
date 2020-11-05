const { resolve } = require('path');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        modules : ['react','react-dom'],
    },
    output: {
        path: path.resolve('dist'),
        library: '[name]',
        filename: '[name].js',
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.join(__dirname,'[name]-manifest.json'),
        }),
    ]
}