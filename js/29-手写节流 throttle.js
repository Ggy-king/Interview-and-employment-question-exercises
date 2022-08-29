//拖拽一个元素时 要随时拿到该元素的位置
//直接用drag事件 则会频繁触发 很容易导致卡顿   drag为拖拽事件
//节流 无论拖拽的速度多快 都会每隔固定时间触发一次


const div = document.getElementById('div')

let timer = null

div.addEventListener('drag', function (e) {
    if (timer) {
        return
    }
    timer = setTimeout(() => {
        console.log(e.offsetX, e.offsetY)

        timer = null
    }, 200);

})


//节流函数

function throttle(fn, delay) {
    let timer = null

    return function () {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

//使用
div.addEventListener('drag', throttle(function (e) {
    console.log(e.offsetX, e.offsetY);
}, 200))

