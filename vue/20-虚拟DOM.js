/**
 * vdom 是实现vue和react 的重要基石
 * diff 算法是vdom 中最核心 最关键的部分
 * vdom是一个热门话题
 */

/**
 * 1
 * DOM操作非常耗费性能
 * 以前用jQuery 可以自行控制DOM的操作时机 手动调整
 * VUE和REACT是数据驱动视图 如何有效操作DOM操作
 */

/**
 * 2
 * 解决方法 --- vdom
 * 有了一定复杂度想要减少计算次数比较难
 * 把计算交给js做 减少DOM执行的次数
 * vdom - 用js模拟DOM结构 计算出最小的变更 操作DOM
 */

// js模拟DOM结构   (也可叫vnode模拟DOM结构)

/**
 * 3 通过snabbdom学习vdom
 * vue参考snabbdom实现的vdom和diff
 * vue3重写了vdom的代码 优化了性能
 * 但vdom的基本理念不变 面试考点不变
 * react vdom具体实现和vue也不相同 但不妨碍同一学习
 */

// snabbdom演示   条件有限不做了
/**
 * h 函数
 * vnode 数据结构
 * patch 函数
 */

/**
 * 用js模拟DOM结构
 * 新旧vnode对比 得出最小的更新范围 最后更新DOM
 * 数据驱动视图的模式下 有效控制DOM操作
 */