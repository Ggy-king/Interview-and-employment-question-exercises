// 面试题
/**
 * 何时使用==何时使用===
 * 值类型和引用类型的区别
 */



// 1 字符串拼接
const a = 100 + 10 //110
const b = 100 + '10'  //'10010'
const c = true + '10'  //'true10'


// 2 ==     值相等即可
100 == '100'  //true
0 == false //true
0 == ''  //true
false = ''  //true
null == undefined  //true

//故在实际应用中 除了 == null之外 其他一律用 === 如
const obj = { x: 1000 }
if (obj.a == null) { }
// 相当于
if (obj.a === null || obj.a === undefined) { }

// 3 if语句和逻辑运算

// if语句判断的并不是true或false 而是truly和falsely

// truly变量: !!a === true的变量
// falsely变量: !! === false的变量

// falsely变量
!!0 === false
!!NaN === false
!!'' === false
!!null === false
!!undefined === false
!!false === false

// truly变量
// 除falsely之外都是truly变量 比如一个数字（不是0）一个函数 一个数组 一个字符串等

// 逻辑判断
// 上面的很好解释了逻辑判断
// 记 falsely变量会继续判断 而truly直接返回不会继续判断

0 && 10  //返回 0
10 && 0  //返回 0
'' || 'abc'   //返回'abc'
'abc' || ''  //返回'abc'
!window.abc  //返回true





