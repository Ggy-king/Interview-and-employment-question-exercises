import { nextTick } from "process"

// 同步action
export const addTodo = text => {
    //返回 action 对象
    return {
        type: 'Add',
        id: nextTodo++,
        text
    }
}

// 异步action
export const addTodoAsync = text => {
    //返回函数 其中有dispatch
    return (dispatch) => {
        // ajax 异步获取函数
        fetch(url).then(res => {
            //执行异步action
            dispatch(addTodo(res.text))
        })
    }
}

/**
 * 1 redux-thunk
 * 2 redux-promise
 * 3 redux-sage
 */