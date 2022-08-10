// 原型
// class 实际上就是函数 可见是语法糖
typeof People   //'function'
typeof Student   //'function'

// 隐式原型和显示原型
console.log(zhangsan.__proto__);   //隐式原型
console.log(Student.prototype);   //显示原型
console.log(zhangsan.__proto__ === Student.prototype);   //全等 指向同一个地址


/**
 * 原型关系
 * 1 每一个class都有显示原型
 * 2 每一个实例都有隐式原型__proto__
 * 3 实例__proto__指向对应class的prototype
 */


/**
 * 基于原型的执行规则
 * 获取属性xiao.name或执行方法xiao.sayHi()时
 * 1 先在自身属性和方法中寻找
 * 2 如果找不到会在__proto__中寻找
 */