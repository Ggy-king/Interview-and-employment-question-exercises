// Protals  传送门

// 1 组件默认会按照既定层次嵌套渲染
// 2 如何让组件渲染到父组件以外


/**
 * 1 使用 Protals 渲染到 body 上
 * 2 fixed 元素要放在 body上 有更好的浏览器兼容性
 * ReactDOM.createProtals(组件,dom节点)
 */

// 使用场景
// 1 overflow:hidden
// 2 父组件 z-index值太小
// 3 fixed需要放在body第一级
