const path = require('path');

module.exports = {
    entry: {
        dachui: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath为指定打包后文件的路径(style-loader配合file-loader 使用在html中插入link标签并引入js中import的样式,)
        // publicPath: '../dist/',
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            // use: ['style-loader', 'css-loader']
            // use: ['css-loader']
            use: [{
                    // loader: 'style-loader/url'
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    /**
                     * 
                     * style-loader/url: 在html中插入一个link标签(配合file-loader使用),一个很小众的功能，
                     * 会把每个import的css都处理成一个link标签，造成加载资源的增加，不利于优化
                     * 
                     * style-loader配合file-loader 使用在html中插入link标签并引入js中import的样式,
                     * 注意：publicPath为指定打包后文件的路径
                     * 
                     * webpack4 自学笔记四（style-loader） - Jason齐齐 - 博客园  
                     * http://www.cnblogs.com/jasonwang2y60/p/9878607.html
                     * 
                     */
                    // loader: 'file-loader'
                    options: {
                        modules: true,
                        localIdentName: '[name]-[local]-[hash:base64:5]',
                        url: true,
                        sourceMap: true,
                    }
                }
            ]
        }]
    }


}