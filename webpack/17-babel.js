/**
 * 环境搭建和基本配置
 * babel-polyfill
 * babel-runtime
 * 
 */

// 环境搭建
// .babelrc配置
// presets和plugins
{
    "presets": [
        [
            "@babel/preset-env"   //预设 把常用的es678等语法打包在此 其实就是将这些语法转化为什么什么plugin 这就是babel工作原理
        ]
    ],
    "plugins": [
        
    ]
}

