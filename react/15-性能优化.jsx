// 1 性能优化是重点
// 2 性能优化对于react来说更为重要
// 3 回顾setState时重点强调的不可变值


/**
 * SCU -- shouldComponentUpdate
 * PureComponent和React.memo
 * 不可变值immutable.js
 */

// 1 SCU
shouldComponentUpdate(nextProps, nextState){
    if (nextState.count !== this.state.count) {
        return true  //可以渲染
    }
    return false  //不可以渲染
}