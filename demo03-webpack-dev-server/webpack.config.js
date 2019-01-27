/**
 * webpack是node写的,因此,node的内置模块,是可以直接拿来用的
 * 
 * 至于这里为什么要用path?
 * 是因为,webpack的输出(output)文件的路径 "必须是绝对路径"
 * 
 * __dirname 是指当前根目录
 * 
 */


const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'bundle.js',
        /**
         * 这里的输出路径,之所以还输出到 src 目录下,是为了可以引用到打包好的文件
         * 
         * 因为,我们还没学使用html插件生成html文件,所以,这里暂时先这样写
         * (实际开发时不会这样写的)不要急,下个demo就会演示html插件咯
         * 还有一个原因就是,我们只配置了开发环境运行,并不会生成dist目录
         * (当然,这个功能也只适用于开发环境,线上环境也用不到)
         */
        path: path.resolve(__dirname, 'src')
    }
}