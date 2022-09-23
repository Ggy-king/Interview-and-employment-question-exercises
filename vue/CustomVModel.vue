<template>
    <!--比如 vue颜色选择 -->
    <input type="text" 
        :value="text"
        @input="$emit('change',$event.target.value)"
    >

    <!-- 
    1 上面的 input 使用了 :value 而不是 v-model
    2 上面的change和model.event对应起来
    3 text属性要对应起来 
    -->
</template>

<script>
export default {
    model: {
        prop: 'text',  //对应props text
        event: 'change'
    },
    props: {
        text: String,
        default() {
            return ''
        }
    }
}
</script>

<style>

</style>