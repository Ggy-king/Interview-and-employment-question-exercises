// 自动更新  （是整个网页的 状态也会更新）

module.exports = {
    watch: true, // 开启监听 默认为false
    // 开启监听之后 webpack-dev-server 会自动刷新浏览器

    // 监听配置
    watchOptions: {
        ignored: /node_module/, //忽略哪些
        // 监听到变化发生后300ms再去执行操作 防止文件更新太快导致重新编译频率太高
        aggregateTimeout: 300, //默认为300ms
        // 判断文件是否发生变化是通过不停的询问系统指定的文件有没有发生变化
        poll: 1000,  //默认是1000ms询问一次
    }
}

// 热更新 （局部更新） 好像改版了不需要这么麻烦
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')

index: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.join(srcPath,'other.js')
]  //入口

new HotModuleReplacementPlugin()  //plugin中

hot: true  //devServer中


// 其实还需要判断 哪些模块需要热更新