<template>
    <!-- $nextTick -->
    <p>
        1 Vue是异步渲染
        2 data改变之后 DOM不会立刻渲染
        3 $nextTick会在data渲染后触发 以获取最新的DOM节点
    </p>
    <div id="app">
        <ul ref="ul1">
            <li v-for="(item,index) in list" :key="index"></li>
        </ul>
        <button @click="addItem">添加一项</button>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            list:['a','b','c']
        }
    },
    methods: {
        addItem() {
            this.list.push(`${Date.now()}`)
            this.list.push(`${Date.now()}`)
            this.list.push(`${Date.now()}`)

            // 使用$nextTick实现data改变立刻渲染
            this.$nextTick(() => {
            // 获取dom元素
            const ulItem = this.$refs.ul1
            //eslint-disable-next-line
            console.log(ulItem.childNodes.length);
            })
            
        }
    },
}
</script>

<style>

</style>