// 抽离代码和第三方库 主要针对生产环境下

// 分割代码块 splitChunks:
splitChunks: {
    chunk: 'all',
    /**
     * initial 入口的chunk 对异步导入的文件不处理
     * async 异步chunk 只对异步导入处理
     * all 全部
     */
        
    // 缓存分组
    cacheGroups: {
        // 第三方模块
        vendor: {
            name: 'vendor',  //chunk 名称
            priority: 1,  //权限更高 优先抽离！！！
            test: /node_modules/,
            minSize: 0, //大小限制
            minChunks: 1, //最少复用几次
        },
        // 公共的模块
        common: {
            name: 'common',  //chunk 名称
            priority: 0,  //权限更高 优先抽离！！！
            minSize: 0, //大小限制
            minChunks: 2, //最少复用几次
        }
    }
}