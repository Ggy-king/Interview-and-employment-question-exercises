// react面试题

/**
 * 1 组件间如何通讯
 * 父子组件props
 * 自定义事件
 * redux和context
 */


/**
 * 2 jsx本质是什么
 * createElement
 * 执行返回vnode
 */

/**
 * 3 Context是什么 如何应用
 * 父组件 向其下所有子孙组件传递信息
 * 如一些简单的公共信息 主题色 语言等
 * 复杂的公共信息 请使用redux
 */

/**
 * 4 shouldComponentUpdated用途
 * 性能优化
 * 配合“不可变值”一起使用 否则会出错
 */

/**
 * 5 redux单项数据流
 * view -> action(creator) -> dispatch(middleware) -> reducer -> state -> view
 */

/**
 * 6 setState场景题
 * 异步
 * 合并
 * setTimeout等中是同步
 */

/**
 * 7 什么是纯函数
 * 返回一个新值，没有副作用(不会偷偷修改其他值)
 * 重点：不可变值
 * 如 arr =  arr1.slice()
 */

/**
 * 8 react组件生命周期
 * 单组件生命周期
 * 父子组件生命周期
 * 注意SCU
 */

/**
 * 9 react发送ajax应该再哪个生命周期上
 * 同vue
 * componentDIdMount
 */

/**
 * 10 渲染列表 为何使用key
 * 同vue 必须使用key 且不能是index和random
 * diff算法中通过tag和key来判断 是否为sameNode
 * 减少渲染次数 提升渲染性能
 */


