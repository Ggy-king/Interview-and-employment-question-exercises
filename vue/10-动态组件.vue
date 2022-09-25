<template>
<!-- 动态组件   -->
    <div>:is="component-name"用法</div>
    <div>需要根据数据 动态渲染的场景 即组件类型不确定</div>

    <!-- 动态组件 :is后为想挂载的组件名 -->
    <component :is="componentOne"></component>

    <div v-for="name in newData" :key="name">
        <component :is="name" />
    </div>
</template>


<script>
export default {
    components: {
        componentOne,
        componentOTwo,
        componentThree
    },
    data () {
        return {
            newData: [
                'componentOne',
                'componentOTwo',
                'componentThree'
            ]
        }
    }
}
</script>

<style>

</style>