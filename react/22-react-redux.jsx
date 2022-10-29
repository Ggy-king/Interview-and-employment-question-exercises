/**
 * 1 <Provider>
 * 2 connect
 * 3 mapStateToProps mapDispatchToProps
 */


// Provider包裹组件 使包裹的组件都具有store的能力
const { connect } = require("http2");
const { Provider } = require("react-redux");

return <Provider store={store}>
    <App/>
</Provider>

// connect
// connect高阶组件 将dispatch作为props注入到组件中
let AddTodo = ((dispatch) => {  //函数组件 用来接收参数 
    // dispatch 即 props.dispatch
    return(<div></div>)
})
AddTodo = connect()(AddTodo)
const VisibleTodoList = connect(
    mapStateTodoList,
    mapDispatchToProps
)(TodoList)