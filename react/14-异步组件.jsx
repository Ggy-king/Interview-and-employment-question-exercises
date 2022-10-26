// 1 import()  异步加载的语法 react一般不这么用
// 2 React.lazy
// 3 React.Suspense


const 组件名 = React.lazy(() => import('组件路径'))

// 使用Suspense关键字 定义fallback回调函数做异步时先展示内容 后展示组件
    
< React.Suspense fallback = {<div>Loading...</div>}>
    <组件名/>
<React.Suspense />