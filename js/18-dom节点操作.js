// dom操作
// css选择器
const a = document.querySelector()
const b = document.querySelectorAll()
const c = document.getElementById()
const d = document.getElementsByClassName()
const e = document.getElementsByTagName()

// dom节点的property  property是一种形式 修改js变量的一种属性
// 意思是 获取到dom节点 我们以js对象的形式对dom节点进行操作 的一种形式


a.style.color = 'red'

// nodeName 节点名称
// nodeType 节点类型


//attribute
// 意思是 修改标签的属性
// 对dom的节点属性
b.setAttribute('data-name', 'imooc')
b.getAttribute('data-name')

// property ； 修改对象属性 不会体现到html的结构中
// attribute ； 修改html属性 会改变html结构

// 都可能引起dom渲染