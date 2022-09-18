<template>
   <nav>vue组件的使用</nav>
   <main>
      <p>props和$emit</p>

      <p>组件间通讯和自定义事件</p>
      <!-- 难点兄弟间通信 -->
      <!-- $on绑定和$emit拿到 -->
      <p>组件的生命周期</p>
      <!-- 生产类的作品 注意beforeDestroy()函数 自定义事件及时销毁 以防信息泄露    -->
   </main>
</template>

<script>
export default {
    // prpos复杂写法 父向子
    props: {
        list: {
            type: Array,
            default() {
                return []
            }
        }
    },

    //子向父调用事件 或调用自定义事件 $emit()
    methods: {
        item(id) {
            this.$emit('item',id)
        }
    },
}
</script>

<style>

</style>