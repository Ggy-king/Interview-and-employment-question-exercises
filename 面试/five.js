// 数据类型
// js6种 es6新增两种
// (数字类型 字符串类型 布尔类型)-基本类型 (object对象)-引用 undefined null
// symbol类型 BigInt类型


{
    1(typeof可以判断基本数据类型)
    2(双引号间再嵌套双引号需要加转义字符)
}
{
    // 字符串方法
    // 1 s.charAt(num) 查找字符串中对应下标的字符
    // 2 s.concat(s2,s3,s4) 连接两个字符串 并返回新的字符串不改变原来的字符串
    // 3 s.substring(2,8) 开始位置 结束位置(不含该位置) 截取字符串
    // 4 s.substr(2,4) 开始位置 长度大小 用法与substring一样，主要不一样的是第二个参数
    // 5 s.indexOf("内容",num) 查找所查找的内容是否存在 返回1或-1  num是从哪一个位置开始查找(不包括该位置)
    // 6 s.trim() 去除字符串两端的空格及制表换行回车符 不改变原来的字符串 es6 trimEnd() trimStart()
    // 7 s.split() 按给定规则分割字符串 返回一个由分割出来的子字符串组成的数组 砍几刀 (空字符串分割效果为每一个字符 纯空则为完整字符串但都是数组中)


}

{
    // for in 遍历循环
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            
        }
    }
}

{
    // Array.isArray(arr) 方法返回一个布尔值 判断是否为数组 弥补typeof的不足
    // arr.push() 在原数组尾部添加元素 会改变原数组
    // arr.pop() 删除数组最后一个元素并返回 会改变原数组
    // arr.shift() 删除数组第一个元素并返回 会改变原数组
    // arr.unshift() 添加一个元素在数组的头部 会改变原数组
    // arr.join() 以指定参数作为分隔符 将所有数组成员连接成一个字符串并返回 undefined或null会转成空字符串 (若不提供参数 默认逗号隔开)
    // arr1.concat(arr2,arr3) 同字符串 且若果concat()内无论是什么类型 哪怕不是变量也会合并 但维度只会取决于arr1的维度
    // arr.reverse() 反转数组且会改变原数组
    // arr.indexOf("内容",num) 查找 返回是第一个符合条件的下标 第二个参数也是起始位置(不包括)
    // 数组相加全部变成字符串
}

{
    // 函数是一段可以反复调用的代码块
    // 对象: 键值 值可以是任意数据类型 若为函数则成为方法 可以调用
    // 对象属性读取方式 对象名.属性 你发现原来之前学的所有方法都是对象构成的
    // 对象套对象再调用称为链式调用

    // Math.abs() 取绝对值
    // Math.max() Math.min() 返回最大最小
    // Math.floor() 向下取整
    // Math.ceil() 向上取整
    // Math.random() 返回0 - 1之间的随机数

    // Date.now() 返回时间 但是毫秒为单位的时间和
    // var d = new Date()
    // d.getDate()  等等很多get方法获取时间
}

