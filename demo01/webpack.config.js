const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'Custom template',
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
            /**
             * @param inject Boolean/String   String  head / body  默认 是 body 
             * 
             * 将打包的文件资源插入到什么地方,默认是放到 底部</body>之前
             * 设置为 head 就会插入到 head 标签中
             * 
             * inject有四个值： true body head false
             * true 默认值，script标签位于html文件的 body 底部
             * body script标签位于html文件的 body 底部
             * head script标签位于html文件的 head中
             * false 不插入生成的js文件，这个几乎不会用到的
             * 
             */
            inject: "head",
            favicon: path.join(__dirname, './src/images/favicon.ico'),
            minify: {
                //去除引号
                removeAttributeQuotes: true,
                //去除注释
                removeComments: true,
                //去除空属性
                removeEmptyAttributes: true,
                //去除空格
                collapseWhitespace: true

            },
            hash: true
                /**
                 * chunks
                 * 
                 * chunks主要用于多入口文件,当你有多个入口文件,那就回编译后生成多个打包后的文件,那么chunks 就能选择你要使用那些js文件
                 *
                 * entry: {
                 *    index: path.resolve(__dirname, './src/index.js'),
                 *    devor: path.resolve(__dirname, './src/devor.js'),
                 *    main: path.resolve(__dirname, './src/main.js')
                 * }
                 *
                 * plugins: [
                 *      new httpWebpackPlugin({
                 *           chunks: ['index','main']
                 *       })
                 * ]
                 * 那么编译后：
                 *
                 * <script type=text/javascript src="index.js"></script>
                 * <script type=text/javascript src="main.js"></script>
                 * 如果你没有设置chunks选项，那么默认是全部显示
                 *
                 * excludeChunks
                 *
                 * 排除掉一些js
                 *
                 * excludeChunks: ['devor.js']
                 * 等价于上面的
                 * 
                 * 插件 html-webpack-plugin 的详解 - 个人文章 - SegmentFault 思否  https://segmentfault.com/a/1190000013883242
                 * 
                 */
        })
    ],
    module: {
        loaders: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         {
            //             loader: 'css-loader',
            //             options: { //importLoaders代表import进来的资源；2代表css-loader后还需要使用几个loader
            //                 // importLoaders: 1
            //             }
            //         },
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 plugins: [
            //                     require("autoprefixer")("last 100 versions")
            //                 ]
            //             }
            //         }
            //     ],
            //     exclude: path.resolve(__dirname, '/node_modules'),
            //     include: path.resolve(__dirname, 'src')
            // },
            {
                test: /\.css$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: { //importLoaders代表import进来的资源;2代表css-loader后还需要使用几个loader
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require("autoprefixer")("last 100 versions")]
                        }
                    }
                ],
                exclude: path.resolve(__dirname, '/node_modules'),
                include: path.resolve(__dirname, 'src')
            },

            // 作者：world_7735
            // 链接：https://www.jianshu.com/p/aa3e52be303e
            // 來源：简书
            // 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", {
            //             loader: "css-loader",
            //             options: {
            //                 importLoaders: 1
            //             }
            //         }, "postcss-loader"]
            //         // use: [
            //         //     'style-loader',
            //         //     'css-loader',
            //         //     {
            //         //         loader: 'postcss-loader',
            //         //         options: {
            //         //             ident: 'postcss',
            //         //             sourceMap: true,
            //         //             plugins: loader => [
            //         //                 require('autoprefixer')({ browsers: ['> 0.15% in CN'] }) // 添加前缀
            //         //             ]
            //         //         }
            //         //     }

            //     // ]
            // },
            // { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?name=[name].[ext]' },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 50,
                        // name: '[name].[ext]',
                        // publicPath: "./images/",
                        outputPath: 'images/'
                    }
                }
            },
            {
                test: /\.(htm|html)$/i,
                // use: ['html-withimg-loader']
                use: {
                    loader: 'html-withimg-loader',
                    options: {
                        attrs: ['img:src', 'img:data-src', 'audio:src'],
                        minimize: true
                    }
                }

            }

        ]
    }
}