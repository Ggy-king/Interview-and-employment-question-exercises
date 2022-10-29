// 基本概念
/**
 * store state
 * action
 * reducer
 */

function counter(state = 0,action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state;
    }
}


// 创建 radux store 来存放状态
let store = createStore(counter);

// 手动订阅更新
store.subscribe(() => {
    console.log(store.getState);
})

// 改变state唯一方法是 dispatch 的一个 action
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type:'INCREMENT'})
store.dispatch({ type: 'DECREMENT' })


/**
 * 1 dispatch(action)
 * 2 reducer -> newState
 * 3 subscribe触发通知
 */