// 1 前端为何要进行打包和构建
// 代码层面
/**
 * 1 体积更小(Tree-Shaking,压缩,合并)   加载更快
 * 2 编译高级语言或语法(TS,es6+,模块化,scss)
 * 3 兼容性和错误检查(polyfill,postcss,eslint)
 */
// 研发流程层面
/**
 * 1 统一 高效开发环境
 * 2 统一构建流程和产出标准
 * 3 集成公司构建规范(提测 上线等)
 */



// 2 module chunk bundle的区别
// module - 各个源码文件 webpack中一切皆模块
// chunk - 多模块合成
// bundle - 最终输出的文件


// 3 loader 和 plugin 的区别
/**
 * loader模块转换器 如less -> css
 * plugin扩展插件 如HtmlWebpackPlugin
 */

// 4 常见的plugin和loader

// 5 babel和webpack的区别
// babel - JS新语法编译工具 不关心模块化
// webpack - 打包构建工具 是多个loader plugin的集合


// 6 如何产出一个lib
// output: {
//     //lib的文件名
//     filename: 'lodash.js',
//     //输出 lib 到 dist目录下
//     path: distPath,
//     // lib的全局变量名
//     library: 'lodash'
// }


// 7 babel-polyfill和babel-runtime的区别
/**
 * 1 babel-polyfill会污染全局
 * 2 babel-runtime不会
 * 3 产出第三方lib要用babel-runtime
 */


// 8 webpack如何实现懒加载
/**
 * 1 import()
 * 2 结合vue react异步组件
 * 3 结合vue-router react-router异步加载路由
 */


// 9 为何proxy不能被polyfill
// 如class可以使用function模拟
// 如promise可以使用callback模拟
// 但proxy功能用Object.defineProperty无法模拟


// 10 webpack优化构建速度(可用于生产环境)
/**
 * 优化babel-loader
 * IgnorePlugin
 * noParse
 * happyPack
 * ParallelUglifyPlugin
 * 
 */

// 11 webpack优化构建速度(不可用于生产环境)
/**
 * 自动更新
 * 热更新
 * DllPlugin
 */

// 12 webpack优化产出代码
/**
 * 小图片base64
 * bundle加hash
 * 懒加载
 * 提取公共代码
 * 使用CDN加速
 * IgnorePlugin
 * 使用production
 * Scope Hosting 
 */

13 