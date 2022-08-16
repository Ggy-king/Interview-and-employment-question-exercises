function fn1(a, b) {
    console.log('this', this);
    console.log(a, b);
    return 'this is fn1'

}

// const fn2 = fn1.bind({ x: 100 }, 10, 20)  //bind函数第一个参数为this替换 剩下参数才是fn1的形参
// const res = fn2()
// console.log(res);

//模拟 bind
// 在function的原型上设bind1API
Function.prototype.bind1 = function () {
    //将参数拆解为数组
    const args = Array.prototype.slice.call(arguments)

    //获取this shift方法可以挖走数组第一项
    const t = args.shift()

    //获取当前对象
    const self = this

    // 返回一个函数
    return function () {
        return self.apply(t,args)
    }
}

const fn2 = fn1.bind1({ x: 100 }, 10, 20)  //bind函数第一个参数为this替换 剩下参数才是fn1的形参
const res = fn2()
console.log(res);