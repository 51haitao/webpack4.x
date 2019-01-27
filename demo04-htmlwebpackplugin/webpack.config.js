const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    // entry: [path.resolve(__dirname, './src/main.js'),
    //     path.resolve(__dirname, './src/word.js')
    // ],
    entry: {
        goudan: path.resolve(__dirname, './src/main.js'),
        dachi: path.resolve(__dirname, './src/word.js')
    },
    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'js/[name]-[hash:8].js'
    },
    plugins: [
        //
        new CleanWebpackPlugin(['dist']),
        //
        new htmlWebpackPlugin({
            title: 'laomeier',
            template: './src/aaa.html',
            filename: 'index.html'
        })
    ]
}

module.exports = config