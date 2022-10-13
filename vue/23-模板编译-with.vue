<template>
    <!-- 模板编译是vue开发中最常用的部分 即与使用相关联的原理 -->
    <!-- 它不是html 有指令、插值、js表达式，则它到底是什么 -->
    <!-- 面试不会直接问 但会通过 组件渲染和更新过程来间接考察 -->

    <p>前置知识 js的with语法</p>
    <p>vue template complier 将模板编译为render函数</p>
    <p>执行render函数生成vnode</p>
</template>

<script>
export default {
    // 使用with 能改变{}内的自由变量查找方式 
    // 将{}内自由变量 当做obj 的属性来查找 obj.a obj.b obj.c 找不到就会报错
    // with要慎用 它打破了作用域的规则 易读性变差
    with(obj) {
        console.log(a);
        console.log(b);
        console.log(c);
    }
}
</script>

<style>

</style>