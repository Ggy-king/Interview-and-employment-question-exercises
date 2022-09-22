<template>
<!-- 挂载   -->
<!-- 更新   -->
<!-- 销毁   -->


/**
{
    new vue()
    初始化 - 事件/生命周期
    --beforeCreate
    初始化 - 注入/校验
    --created
    (是否指定 el 选项) - 否 - 当vm.$mount(el)函数时 - 是 - 是否指定template选项
    (是) -> 将template编译到render函数中
    (否) -> 将el外部的HTML作为template编译
    --beforeMount
    创建vm.$el并用其替换el
    --mounted
    挂载完毕 - (当data被修改时) --beforeUpdate -> 虚拟dom重新渲染并应用更新 --updated
    当vm.$destroy()函数时
    --beforeDestroy
    解除绑定销毁子组件以及事件监听器
    销毁完毕
    --destroyed

}

*/
</template>

<script>
export default {

}
</script>

<style>

</style>