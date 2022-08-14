//闭包 两种情况
// 1 函数作为参数被传递
// 2 函数作为返回值被返回

// 1 
function create() {
    const a = 100
    return function () {
        console.log(a);
    }
}

const fn = create()
const a = 200
fn()   // 100


// 2 
function print(fnc) {
    const b = 200
    fnc()
}

const b = 100
function fnc() {
    console.log(a);
}

print(fnc)   //100


//所有的自由变量的查找 是在函数定义的地方查找 向上级作用域查找
//  不是在执行的地方!!!