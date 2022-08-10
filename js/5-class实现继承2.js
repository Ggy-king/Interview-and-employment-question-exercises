// 继承
// extends
// super
// 扩展或重写方法

// 父类
class People {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(
            `${this.name} 在吃饭`
        );
    }
}

// 子类
class Student extends People {  //继承
    constructor(name, number) {
        super(name)  //传递
        this.number = number
    }
    sayHi() {
        console.log(
            `姓名 ${this.name} , 学号 ${this.number}`
        );
    }
}

const zhangsan = new Student('张三', 18)
console.log(zhangsan.name);
console.log(zhangsan.number);
zhangsan.sayHi()
zhangsan.eat()