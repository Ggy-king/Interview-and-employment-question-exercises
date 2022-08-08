//值类型
let a = 100
let b = a
a = 200
console.log(b);  //b=100

//引用类型 引用变都变
let c = { age: 18 }
let d = c
d.age = 20
console.log(c.age);  // 21

// 值类型与引用类型的本质是值指向不同 一个只在栈操作 一个在栈中指向堆(地址)

// 常见值类型
let a1 //undefined
const s = 'abc'
const n = 100
const m = true
const f = Symbol('s')   //es6的symbol

//引用类型
const obj = { x: 100 }
const arr = [1, 2, 3, 4]
const q = null //特殊引用类型 指针指向空地址

function fn() { }  //函数为可执行的代码 可以归类为特殊引用类型
//特殊引用类型 不用于存储数据 所以没有拷贝 复制函数这一说