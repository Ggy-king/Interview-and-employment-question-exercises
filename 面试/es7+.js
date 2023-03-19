// 7
// 1 求幂运算符
Math.pow(3, 2)  // 3的2次方

// 2 数组的includes方法  
[1, 2, NaN].includes(NaN)  //返回true或false

[1, 2, NaN].indexOf(1)  //返回下标



/////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8
// async await
async function r() {
    return "success or err"
}

// 1 async返回值若是非Promise对象 状态为fulfiled成功状态 then指定
// 2 async返回值若是Promise对象那个 状态为fulfiled or rejected   then or catch
async function test() {
    let res = await r()  
    console.log(res)
}


// 1 await后面接promise 或 非promise
// 2 执行顺序一定会等着await语句执行完成之后才能继续向下执行



// 对象方法扩展
// 1 Object.values(obj)  把value取出来放在数组中
// 2 Object.entries(obj) 把键值分别放在数组中
// 3 Object.getOwnPropertyDescriptors(obj) 获取属性描述符  就是把对象中的每个键详细写出来(属性)



// 字符串扩展
let str = "ni"
str.padStart(10, "x") // 在str前添加字符串x直至str数量达到10
str.padEnd(10, "x") // 在str后添加字符串x直至str数量达到10




/////////////////////////////////////////////////////////////////////////////////////////////////////////
// 9
// 对象的剩余参数与展开运算符




// 正则表达式命名捕获组
let str1 = "今天是2023-10-21"
let reg = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
let res = reg.exec(str1)
let { year, month, day } = res.groups



// Promise.finally()
ajax().then(() => {

}).catch(() => {

}).finally(() => { })   //无论成功与否都会调用的方法





// 异步遍历器
// 需求场景 比如for循环中需要进行异步
function ajax() {
    return new Promise(resolve => {
        resolve(data)
    })
}
//异步生成器 既有异步又是生成
async function* gen() {
    yield ajax(111)
    yield ajax(222)
}
// g就是一个异步遍历器
let g = gen()
// 调用
// g.next().then(res => {
//     console.log(res)
//     return g.next()
// }).then(res => {
//     console.log(res)
//     return g.next()
// })
// 高级调用
async function test() {
    // let res1 = await g.next()
    // console.log(res1)
    // let res2 = await g.next()
    // console.log(res1)
    // let res3 = await g.next()
    // console.log(res1)

    let list = [g.next(), g.next(), g.next()]
    for await (let i of list) {
        console.log(i)
    }
}
test()
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// 如果我要在一个for循环中进行异步遍历 该如何实现
// 第一步根据需求建立可以异步调用的函数 如ajax
function ajax() {
    return new Promise(resolve => {
        resolve(data)
    })
}
// 第二步编写异步生成器
async function* gen() {
    yield ajax(111)
    yield ajax(222)
}
// 第三步设置异步遍历器
let e = gen()
// 第四步编写函数异步调用
async function test() {
    let list = [e.next(), e.next(), e.next()]

    for await (let i of list) {
        console.log(i)
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////


// Object.fromEntries()
// 1 将数组转化为对象形式 与es8中entries功能相反
let str2 = "name=xiaoming&age=18"
let searchParams = URLSearchParams(str2)
Object.fromEntries(searchParams)

// str.trimStart 与 str.trimEnd  除去头部与尾部的空格

// 1 数组的flat flatMap
// 2 Symbol对象 descriptor属性
let s1 = Symbol("name")
s1.description   //该写法可以取出symbol中的值
// 3 try {
    
// } catch (error) {
    
// }
async function test() {
    try {
        await Promise.race([pro1,pro2])
    } catch (error) {
        console.log("错误")
    }
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////
// 11

// Promise.allSettled()
// 1 无论是成功还是失败 都会走.then

// 动态导入import
// type = "module"
// if (a) {
//     import('./1.js')
// } else {
//     import("./2.js")
// }

// import.meta // 返回一个对象 有一个url属性 返回当前模块的url路径 只能在模块内使用