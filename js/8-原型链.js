// 原型的最上一层是Object.prototype __proto__ = null

// instanceof 是顺着隐式原型向上找是否有相应的显示原型

/**
 * 注意 class是es6语法 由ECMA委员会发布
 * ECMA只规定语法规范 但不规定如何实现
 * 目前是v8引擎实现方式 也是主流的
 */

// 面试题 如何准确判断一个变量是数组
a instanceof Array

// 面试题 class的原型本质
// 1 原型和原型链的图示
// 2 属性和方法的执行规则
