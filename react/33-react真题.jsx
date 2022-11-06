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


/**
 * 11 函数组件和class组件的区别
 * 纯函数 输入props 输出jsx
 * 没有实例 没有生命周期 没有state
 * 不能扩展其他方法
 */

/**
 * 12 什么是受控组件
 * 表单的值 受到state控制
 * 需要自行监听onChange 更新state
 * 对比非受控组件
 */


/**
 * 13 何时使用异步组件
 * 同vue
 * 加载大组件
 * 路由懒加载
 */


/**
 * 14 多个组件有公共逻辑 如何抽离
 * 高阶组件HOC
 * Render Props
 * mixin已被React废弃
 */

/**
 * 15 redux如何进行异步请求
 * 使用异步action
 * 如redux-thunk
 */

/**
 * 16 react-router如何配置懒加载
 * lazy(() => import('./路径))
 */

/**
 * 17 PureComponent有何区别
 * 实现了浅比较的SCU
 * 性能优化
 * 但要结合不可变值使用
 */

/**
 * 18 react事件和DOM事件的区别
 * 所有事件挂载到document
 * event不是原生的 是SyntheticEvent合成事件对象
 * dispatchEvent
 */

/**
 * 19 react性能优化
 * 渲染列表时加key
 * 自定义事件 dom事件及时销毁
 * 合理使用异步组件
 * 减少函数bind this次数
 * 合理使用 SCU pureComponent memo
 * 合理使用Immutable.js
 * webpack优化
 * 前端通用优化 如懒加载
 * 使用SSR
 */

 