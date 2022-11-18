// 开启 scope hosting  需要es6代码支持 即文件中最好都是es6语法

// 使多个文件打包后的多个函数 合并成少个甚至一个函数
/**
 * 1 代码体积更小
 * 2 创建函数作作用域更少
 * 3 代码可读性更好
 */

const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')

module.exports = {
    resolve: {
        // 针对npm中的第三方模块优先采用 jsnext:main中指向es6模块化的语法
        mainFields: ['jsnext:main','browser','main'],
    },
    plugins: [
        new ModuleConcatenationPlugin()
    ]
}

