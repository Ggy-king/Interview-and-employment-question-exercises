// 1 mixin 已经被react废弃
// 2 高阶组件 HOC

// 高阶组件不是一种功能 而是一种模式
const HOCFactory = (Component) => {
    class HOC extends React.Component {
        //在此定义多个组件的公共逻辑
        render() {
            return <Component {...this.props} />  //返回拼装的结果
        }
    }
    return HOC
}
const EnhancedComponent1 = HOCFactory(WrappedComponent1)
const EnhancedComponent2 = HOCFactory(WrappedComponent2)

// 注 redux中的connect是高阶组件
import { connect } from 'react-redux'
//connect是高阶组件
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListComponent)
export default VisibleTodoList


// 3 Render Props

// render Props 的核心思想
// 通过一个函数将 class 组件的 state 作为 props 传递给纯函数组件
class Factory extends React.Component {
    constructor() {
        this.state = {
        //   state 即多个组件的公共逻辑
        }
    }
    // 修改 state
    render() {
        return <div>{ this.props.render(this.state)}</div>
    }
}

// 在高阶组件中是子组件被高阶组件包裹形成功能 而在Render Props中反之
const App = () => {
    <Factory render={
        /*render 是一个函数组件 */
        ((props) => <p>{props.a} {props.b}</p>)
    } />
}

// HOC与Render Props
// HOC模式简单 但会增加组件层级
// Render Props 代码简洁 学习成本高
// 按需使用