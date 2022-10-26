// 前提 只要是默认情况下 父组件更新 子组件无条件更新

/**
 * 只要组件有渲染 则就会调用shouldComponentUpdate函数
 * 需要SCU优化的时候 再优化3
 */
shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count !== this.state.count) {
        return true  //可以渲染
    }
    return false  //不可以渲染
}

// 对比之前的state 判断某些组件数据是否需要更新