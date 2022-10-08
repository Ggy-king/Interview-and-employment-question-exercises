<!-- Vue响应式 -->
<template>
    <!-- 1 组件data的数据变化 立即触发视图更新 -->

    <!-- 2 实现数据驱动视图的第一步 -->

    <!-- 3 考餐Vue原理(一) -->

    <p>
        核心API - Object.defineProperty(get set的使用)
        监听对象 监听数组
        复杂对象 深度监听
        缺点

        <!-- 1 深度监听 需要递归到底 一次性计算量较大 -->
        <!-- 2 无法监听新增属性和删除属性 -->
        <!-- 3 无法原生监听数组 需要特殊处理 -->
    </p>
    <p>
        Object.defineProperty 的一些缺点 vue3.0启用Proxy
    </p>
    <p>
        Proxy兼容性不好 且无法使用polyfill
    </p>
</template>

<script>
export default {

}
</script>

<style>

</style>