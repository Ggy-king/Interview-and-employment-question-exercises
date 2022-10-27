// PureComponent(纯组件) -- class SCU中实现了浅比较
class List extends React.PureComponent{}  //加了个SCU函数 做了一个浅比较
    
// memo -- 函数式组件 PureComponent
export default React.memo(MyComponent,areEqual)

// 浅比较已经可以满足了大部分的情况(尽量不要进行深度比较)

