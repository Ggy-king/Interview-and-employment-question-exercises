// happyPack多进程打包

/**
 * js单线程 开启多进程打包
 * 提高构建速度
 */

const HappyPack = require('happypack')
const { ParallelUglifyPlugin } = require('webpack-parallel-uglify-plugin')
    
    
module: {
    rules: [
        {
            test: /\.js$/,
            use: ['happypack/loader?id=babel'],
            
        }

    ]
}

plugins: [
    new HappyPack({
        // 使用唯一标识代表处理唯一特殊文件
        id: 'babel',
        // 如何处理.js文件 用法和loader一样
        loaders: ['babel-loader?cacheDirectory']  //babel打包开启多线程
    }),
    new ParallelUglifyPlugin({
        //传递给uglifyJS参数
        //还是使用Uglify压缩 只不过是帮助开启了多进程
        uglifyJS: {
            output: {
                beautify: false,  //最紧凑的输出
                comments: false,  //删除所有注释
            },
            compress: {
                //删除所有的 console语句 可以兼容ie浏览器
                drop_console: true,
                //内嵌定义了但是只用到了一次的变量
                collapse_vars: true,
                //提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        }
    })
]

// ParallelUglifyPlugin 多进程压缩js

// webpack内置Uglify工具压缩js
// js单线程 开启多线程压缩更快