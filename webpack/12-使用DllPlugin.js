const { DllPlugin } = require("webpack");

// DllPlugin动态连接库插件

// 前端框架如vue react 体积大 构建慢
// 较稳定 不常升级版本
// 同一个版本只构建一次 不用每次都重新构建

// 使用dllplugin优化上述问题

/**
 * webpack以内置dllPlugin
 * DllPlugin - 打包出dll文件
 * DllReferencePlugin - 使用dll文件
 */

// 只要不升级 不改版本 可以一直使用该dll文件


// 单独配置一个 webpack.dll.js文件