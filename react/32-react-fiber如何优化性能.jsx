// 更新的两个阶段

// 1 上述的patch被拆分为两个阶段
// 2 reconciliation阶段- 执行diff算法 纯js计算
// 3 commit阶段- 将diff结果渲染DOM


/**
 * js是单线程 且和DOM渲染共用一个线程
 * 当组件足够复杂 组件更新时计算和渲染都压力大
 * 同时再有DOM操作需求 将卡顿
 */


// 解决方案fiber

// 将reconciliation阶段进行任务拆分(commit无法拆分)
// DOM需要渲染时暂停 空闲时恢复
// window.requestIdleCallback  // 部分浏览器不支持 可以使用这个API实现fiber


// 关于 react运行机制