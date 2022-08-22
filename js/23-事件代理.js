//事件代理
//代码简洁
//减少浏览器内存
//但是不要滥用
const div = document.getElementById('div')
bindEvent(div, 'click', event => {
    const target = event.target
    if (target.nodeName === 'A') {
        alert(target.innerHTML)
    }
})