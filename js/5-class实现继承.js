// class
// constructor
// 属性
// 方法

class Student {
    constructor(name,number) {
        this.name = name
        this.number = number
    }
    sayHi() {
        console.log(
            `姓名 ${this.name} , 学号 ${this.number}`
        );
    }
    // study() {
        
    // }
}

// 通过类声明对象/实例
const zhangsan = new Student('张三', 18)
console.log(zhangsan.name);
console.log(zhangsan.number);
zhangsan.sayHi()