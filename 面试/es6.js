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
    [nam]:'nihao'
}
// 3 Object.assign(obj1,obj2,obj3) 合并对象 但是基于第一个元素的及他会改变第一个对象
// 4 Object.is 几乎与===一样的功能 但是Object.is(NaN,NaN) 返回true

// 参数默认值
// 1 参数默认值
// 2 剩余参数 rest参数   function(...data) {}
// 3 name属性 函数的名字

// Symbol  有时候对象中是属性总会被外面的重名而被覆盖
// 1 每一个Symbol都是独一无二的
// 2 不能运算
// 3 隐式转换boolean  true
// 注意 obj.name是修改对象的属性 而obj[name]则是增加属性键和值的意思




// iterator 主要是为各种数据提供一个同一的接口 进行排列 iterator接口主要供for...of循环


