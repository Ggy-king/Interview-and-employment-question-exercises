// 使用babel - polyfill会污染全部环境
window.Promise = function () { }
Array.prototype.includes = function () { }

// 上述如果仅做独立的web 没事
// 但是如果做lib(库) 则会污染全局 因为你不知道他怎么使用 定义了什么



// babel-runtime   功能一样且不会污染全局

{
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",  //使用usage  按需引入
                "corejs": 3   //corejs3版本
            }
        ]
    ],
        "plugins": [
            "@babel/plugin-transform-runtime",
            {
                "absoluteRuntime": false,  
                "corejs": 3,
                "helpers": true,
                "regenerator": true,
                "useESModules": false
            }
        ]
}