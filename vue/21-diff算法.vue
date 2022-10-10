<template>
    <main>
        <ul>
            <li>1 diff算法是vdom中最核心 最关键的部分</li>
            <li>2 diff算法在日常中使用vue react中就可以体现出来(如key值的使用)</li>
            <li>3 diff算法是前端热门话题</li>
        </ul>
        <ul>
            <li>1 diff即对比 是一个广泛的概念 如linux diff命令 git diff等</li>
            <li>2 两个js对象也可以做diff算法</li>
            <li>3 两棵树(vdom)也可以做diff算法 如vdom diff</li>
        </ul>
        <ul>
            <li>1 树的diff时间复杂度为n的三次方</li>
            <li>2 第一遍历树1 第二遍历树2 第三排序</li>
            <li>3 该算法不可用 1000个节点需要计算1亿次</li>
        </ul>
        <ul>
            <li>1 优化时间复杂度为n</li>
            <li>2 只比较同一层级 不跨级比较</li>
            <li>3 tag不同 则直接删掉重建 不在深度比较</li>
            <li>4 tag和key 两者相同 则认为是相同节点 不再深度比较</li>
        </ul>
    </main>
</template>

<script>
export default {

}
</script>

<style>

</style>