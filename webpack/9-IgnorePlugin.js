// IgnorePlugin 避免引入无用模块 

// 例子 moment模块

new webpack.IgnorePlugin(/\.\/locale/, /moment/)  //过滤moment中的locale文件夹


// noParse避免重复打包

noParse: [/react\.min\.js$/]   // 不对react.min.js进行打包处理  即引入但不打包 不模块化分析