var s = document.getElementById("div")


document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName('div') //Html标签名
document.getElementsByName()  //可以读取页面name属性
document.querySelector()  //接收css选择器

document.createElement('p') //创建一个标签
document.createTextNode('文本') //创建文本节点
document.createAttribute("id") //创建属性
s.setAttributeNode(id) //将创建的属性挂载到上面
s.appendChild() //挂载到结构上


Element.id  //读取元素的id 可读写
Element.className //类名 
Element.classList.add() //添加一个类名
Element.classList.remove() //移出一个类名
Element.classList.contains() //检查当前元素是否包含给类名
Element.classList.toggle() //将某个类名移入或移出
s.innerHTML = "123456"

document.documentElement.clientHeight //获取视口的高度  不包括border margin
document.body.clientHeight //获取页面的高度
// scrollHeight与clientHeight基本没有区别 唯一区别是scrollHeight不包括隐藏部分的
document.documentElement.scrollTop  //获取滚动高度
document.documentElement.scrollLeft  //获取水平滚动宽度
// offsetHeight与offsetWidth只不包含外边距
// offsetTop与offsetLeft距离父级元素的距离

// 操作css
s.setAttribute("style", "width:200px;height:200px")
s.style.border = '1px solid black'
s.style.cssText = 'width:200px;height:200px'

    // 事件处理程序
    // 1 html事件处理
    < button onclick = "clickHandle()" ></ >
        function clickHandle() {
            console.log('点击事件');
    }
        
// 2 dom0即事件处理 缺点无法同时添加多个事件
s.onclick = function () { }


// 3 dom2即事件处理
s.addEventListener("click",function () {
    
})


// 鼠标事件
{
    click 
    // dblclick 双击鼠标
    mousedown
    mouseup
    mousemove
    mouseenter
    mouseleave
    mouseover
    mouseout
    // wheel 滚轮
}

//键盘事件
{
    keyup   
    // keypress 只触发有值的键
    keydown
    // keyCode 按键唯一标识 回车13
}

// 表单事件
{
    input
    // select 当input textarea里面的文本被选中时触发事件
    // change 会在确认之后时触发
    // reset() 清空表单
    // submit 点击按钮会触发在表单上的submit事件 但事件绑定在form表单上
}

//event事件对象
// e.target  获取当前节点
// e.type  获取当前事件
e.preventDefault();  //组织默认事件
e.stopPropagation();  //阻止事件冒泡  冒泡 事件的传递方式是由内到外

// 事件代理 用父元素控制多个子元素
// 定时器延时器的this指向全局


// 防抖
// 判断定时器是否存在
function debounce(fn,delay) {
    var timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(fn,delay)
    }
}

// 设定时器函数
function scrollHandle() {
    var scrollTop = document.documentElement.scrollTop
    console.log(scrollTop);
    
}

// 滚动事件  主
window.onscroll = debounce(scrollHandle,200)



// 节流
function throttle(fn,delay) {
    var valid = true
    return function () {
        if (!valid) {
            return false
        }
        valid = false
        setTimeout(function () {
            fn()
            valid = true
        },delay)
    }
}
// 设定时器函数
function scrollHandle() {
    var scrollTop = document.documentElement.scrollTop
    console.log(scrollTop);

}

// 滚动事件  主
window.onscroll = throttle(scrollHandle, 2000)

