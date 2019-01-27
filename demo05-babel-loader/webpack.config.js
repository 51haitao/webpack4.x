// const path = require('path');

module.exports = {
    // entry: './src/main.js',
    // output: {
    //     path: path.resolve(__dirname, './dist'),
    //     filename: 'js/bundle.js'
    // },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { // 这里用options而不是query，虽然可以兼容，但是还是按照规则来吧
                        // presets: ['env'], // 使用es6工具包
                        // plugins: ['transform-runtime']

                    }
                }
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    }
}