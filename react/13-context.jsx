// context
/**
 * 1 公共信息如何传递给每个组件
 * 2 使用props太繁琐
 * 3 使用redux小题大做
 */

/**
 * 产生
 * {创建Context填入默认值 任意js变量}
 * {使用static contextType = 创建的变量名称} 指定静态
 * 修改
 * 
 * 消费
 * const theme = this.context //react会向上找到最近的theme  class组件的写法
 * return <T.Consumer>{ value => <p>{value}</p>}</T.Consumer>  使用Consumer   函数式写法
 * 
 */