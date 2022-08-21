//编写一个通用的事件监听函数
function bindEvent(elem, type, fn) {
    elem.addEventListener(type,fn)
}
const a = document.getElementById('link1')
bindEvent(a, 'click', e => {
    e.preventDefault()  //阻止默认行为
    alert('clicked')
})


//描述事件冒泡的机制
//无限下拉的图片列表 如何监听每个图片的点击

//事件绑定
const btn = document.getElementById('btn1')
btn.addEventListener('click', event => {
    console.log('clicked');
})
//事件冒泡

const body = document.body
bindEvent(body, 'click', event => {
    event.stopPropagation()   //阻止冒泡
    console.log('body click')
    console.log(event.target)
})
const div = document.getElementById('div')
bindEvent(div, 'click', event => {
    console.log('div click')
    console.log(event.target)
})
//事件代理