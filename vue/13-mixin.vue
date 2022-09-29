<template>
    <!-- mixin主要应用在大项目中 -->
    <p>多个组件有相同或的逻辑 抽离出来</p>
    <p>mixin并不是完美解决 会有一些问题</p>
    <p>vue3提出的Composition API旨在解决这些问题</p>


    <p>1 变量不明确 不利于阅读</p>
    <p>2 多个mixin可能会造成命名冲突的问题</p>
    <p>3 mixin和组件可能会出现多对多的关系 复杂度比较高</p>
</template>

<script>
import CustomVModel from 'CustomVModel'
export default {
    mixins: [CustomVModel],   //可以添加多个 会自动合并

}
</script>

<style>

</style>