console.log('深拷贝题目')

/**
 * 面试题 手写深拷贝
 */

const obj = {
    age: 22,
    name: '小燕',
    address: {
        city: '北京'
    },
    arr: ['a', 'b', 'c']
}
const obj2 = deepClone(obj)
if (obj === obj2) {
    console.log('深拷贝失败');
} else {
    console.log('深拷贝成功');
}
console.log(obj2.name);

// 深拷贝函数建立 手写
function deepClone(obj = {}) {
    // 1 判断是否为对象
    // 2 判断是否为数组
    // 3 设一个结果变量用于储存
    // 4 遍历每一个元素 是其走上面的路径

    if (typeof obj !== 'object' || obj == null) {
        // obj是null 或者不是对象和数组则直接返回
        return obj
    }

    // 初始化返回结果 2 3 部
    let result
    if (obj instanceof Array) {
        return result = []
    } else {
        result = {}
    }

    for (let key in obj) {
        //保证 key 不是原型的属性
        if (obj.hasOwnProperty(key)) {
            // 递归调用
            result[key] = deepClone(obj[key])
        }
    }



    return result
}