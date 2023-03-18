// 7
// 1 求幂运算符
Math.pow(3, 2)  // 3的2次方

// 2 数组的includes方法  
[1, 2, NaN].includes(NaN)  //返回true或false

[1, 2, NaN].indexOf(1)  //返回下标


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
