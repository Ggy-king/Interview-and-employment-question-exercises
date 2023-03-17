// let const
// 变量的解构赋值
// 模板字符串
// 字符串的扩展
str.includes()  // 判断str中是否包含某字符串 返回true 第二参数是从某位置开始
str.startsWith() // 判断str是否以某字符串开头 返回true 第二参数是从某位置开始
str.endsWith() // 判断str是否以某字符串结尾 返回true 第二参数是从某位置结束
str.repeat() // 将str重复n次 并返回新字符串


// 数值扩展
// 1 支持二进制八进制的写法
let num = 0x100
let num1 = 0b100
let num2 = 0o100
// 2 Number.isFinite()有限数 Number.isNaN() Number.isInteger()整数
// 3 Number.EPSILON 最小浮点数的差值
// 4 Math.trunc() 去掉小数部分 不四舍五入
// 5 Math.sign() 判断一个数是正数 负数 还是0 还是NaN(不是数字的都是) 返回 +1 -1 +0 -0 NaN


// 数组扩展
// 1 展开运算符
// 2 Array.from() 将类似于数组的结构转化成数组
// 3 Array.of() 创建新数组
// 4 arr.find() arr.findIndex arr.findLastIndex()
// 5 arr.fill(a,b,c) 填充替换 从b到c填充a
// 6 arr.flat() arr.flatMap() 扁平化处理 降维


// 对象扩展
// 1 对象简写
// name:name => name
// test:function(){} => test(){}
// 2 对象属性表达式
let nam = "a"
let obj = {
    [nam]: 'nihao'
}
// 3 Object.assign(obj1,obj2,obj3) 合并对象 但是基于第一个元素的及他会改变第一个对象
// 4 Object.is 几乎与===一样的功能 但是Object.is(NaN,NaN) 返回true


// 参数默认值
// 1 参数默认值
// 2 剩余参数 rest参数   function(...data) {}
// 3 name属性 函数的名字


// Symbol  有时候对象中是属性总会被外面的重名而被覆盖  防止对象名与属性名重名
// 1 每一个Symbol都是独一无二的
// 2 不能运算
// 3 隐式转换boolean  true
// 注意 obj.name是修改对象的属性 而obj[name]则是增加属性键和值的意思
let keys = {
    name: Symbol("name"),  //括号中为命名 好辨认
    location: Symbol("location")
}
let obj1 = {
    [keys.name]: "张三",    //加中括号是keys.name变成变量 改变量的类型为symbol
    [keys.location]: "大连"
}
// 遍历 for in 遍历普通对象键值 Object.getOwnPropertySymbols(obj1) 遍历Symbol类型
Reflect.ownKeys(obj1).forEach(item => console.log(item, obj[item]))  //遍历所有的类型


// iterator 主要是为各种数据提供一个同一的接口 进行排列 iterator接口主要供for...of循环
let iter = arr[Symbol.iterator]
iter.next()  //每一次的遍历都是next的下一次
// 1 只有该类型的原型中有iterator接口 就可以使用for of
// Array Set Map String arguments NodeList 默认有


// Set
// 1 类似数组 但是所有值都是唯一的 一般做去重
// 2 s.has()判断某值是否存在
// 3 s.delete() 删除某元素
// 4 s.clear() 全部删除
// 5 s.keys() 遍历所有键名
// 6 s.values() 遍历所有值
// 7 s.entries() 遍历所有键值对
// 8 s.forEach() 遍历每一个成员


// Map
// 1 类似对象 但是任何类型的值都可以当做键
let m1 = new Map(
    ["name", "jick"],
    ["age", 100],
    [{a:1},"大连"]
)
// 2 set get delete clear has size


// proxy代理 
// 1 响应式框架原理的部分  数据改变影响视图的改变
Object.defineProperties(obj2, "data", {   // 创建一个对象  老版 每次只能拦截一个且只能拦截对象
    get() {
        // 获取的时候拦截到 并修改
    },
    set() {
        // 设置的时候拦截到 并修改
    }
})
// 2 proxy的作用是在对象和对象的属性之间设置一个代理 获取和设置该对象的值等操作都会被拦截
let proxy = new Proxy(obj3, {
    get(target,key) {
        // 如果是方法要改变this指向 使用bind绑定   为什么要改变? 因为你新创建的proxy是没有这样那样的方法的 所以你需要调用什么对象使用指向他的
    },
    set(target,key,value) {
        target[key] = value
    },
    has() {

    }
})


// Reflect
// Reflect可以用于获取目标对象的行为 与Object相似 其方法与Proxy是对应的
// 1 代替Object 某些方法
Object.defineProperty()
Reflect.defineProperty()
// 2 修改某些Object方法返回结果
// 3 命令式变成函数行为
"name" in obj //老写法
Reflect.has(obj, "name") //新写法
delete obj.name  //老写法
Reflect.defineProperty(obj, "age") //新写法
// 4 配合proxy 其会找到默认的方法


// Promise
// 1 三种状态 pending操作未完成 fulfilled操作成功 rejected操作失败 状态一旦改变就不会变成其他的了
// 2 Promise.all([])  //全部的Promise结束后才能执行某操作
// 3 Promise.race([])  //有任何一个结束即开始


// Generator函数(生成器函数)
// 1 Generator函数是一种异步编程解决方案 是一个状态机，封装了多个内部状态
// 2 它会返回一个遍历器对象 其除了状态机 还是一个遍历器对象生成函数
function* gen() {
    console.log(1)
    yield "a"  //产出: 
    console.log(1)
    yield "b"
    console.log(1)
    yield //迭代结束 因为无产出
}
let g = gen()
g.next()
g.next()
g.next()