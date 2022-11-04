// setState batchUpdated

// 1 有时异步(普通使用) 有时同步(setTimeout,DOM事件)
// 2 有时合并(对象形式) 有时不合并(函数形式)

/**
 * 1 setState 主流程
 * 2 batchUpdated 机制
 * 3 transaction (事务)机制
 */

//setState 异步还是同步
/**
 * 1 setState无所谓异步还是同步
 * 2 看是否命中batchUpdate机制
 * 3 判断isBatchingUpdates 是true还是false
 */

// 哪些能命中 batchUpdate 机制
/**
 * 1 生命周期(和他调用的函数)
 * 2 React中注册的事件(和他调用的函数)
 * 3 React可以“管理”的入口
 */

// 哪些不能命中 batchUpdate 机制
/**
 * 1 setTimeout setInterval等(和他调用的函数)
 * 2 自定义的DOM事件(和他调用的函数)
 * 3 React管不到的入口
 */


// transaction(事务)机制
/**
 * 定义开始和结束
 */