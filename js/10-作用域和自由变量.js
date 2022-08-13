// 作用域
let a = 0;
function fn1() {
    let a1 = 100

    function fn2() {
        let a2 = 100

        function fn3() {
            let a3 = 100
            return a + a1 + a2 + a3
        }
        fn3()
    }
    fn2()

}
fn1()

// 作用域范围由外而内
// 全局
// 局部
// 块级 es6新增

// 自由变量 就是变量的作用域的查找
// 由内而外 找到为止