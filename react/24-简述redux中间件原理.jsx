// redux 中间件
// 简单图
// button --(callback)--> dispatch --(action)--> reducer --(state)--> view

// 将dispatch 加以处理 改造加逻辑实现
// button --(callback)--> new dispatch --(action)--> reducer    new dispatch[mid 1 -> mid2 -> (action) ... -> dispatch]


/**
 * 插入其他中间件
 */
import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
const logger = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(thunk,logger)  // 会按顺序执行
)

// 自己修改 dispatch 增加logger
let next = store.dispatch
// 重新赋值
store.dispatch = function dispatchAndLog(action) {
    console.log(action)
    // 中间的next(action)还是执行之前dispatch操作
    next(action)
    console.log(store.getState);
}

/**
 * 1 基本概念
 * 2 单项数据流
 * 3 react-redux
 * 4 异步action
 * 5 中间件
 */