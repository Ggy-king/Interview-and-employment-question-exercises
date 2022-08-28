const input = document.getElementById('input')

let timer = null

input.addEventListener('keyup', function () {
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        // 模拟触发change事件
        console.log(input.value)

        // 清空定时器
        timer = null
    }, 500);
})

// debounce函数
function debounce(fn, delay = 500) {
    //timer是闭包的
    let timer = null

    return function () {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            fn.apply(this, arguments)  //针对传入的函数操作
            timer = null
        }, delay)
    }
}

// 演示
input.addEventListener('keyup', debounce(() => {
    console.log(input.value)
}), 600)