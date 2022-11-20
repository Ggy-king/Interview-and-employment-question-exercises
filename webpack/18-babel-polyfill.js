// 什么是babel-polyfill
// 是一种补丁 浏览器不兼容某种语法 其可在原型上添加

// core-js和regenerator
// core-js是polyfill的集合(官方标准库)
// generator 函数(处理异步)， 被async/await代替 core-js不支持  所以使用regenerator库支持一下
function* tell() {    
    console.log('执行a处理');
    yield 'a'

    console.log('执行b处理');
    yield 'b'

    console.log('执行c处理');
    yield 'c'

}


// babel - polyfill已弃用

// 使用的话需要引入并配合webpack使用
// 但需要按需引入其文件比较大

// 配置按需引入
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

        ]
}