<template>
    <main>
        <p>1 v-show通过CSS display 控制显示和隐藏</p>
        <p>2 v-if组件真正的渲染和销毁 而不是显示和隐藏</p>
        <p>3 频繁切换状态的使用v-show 否则使用v-if</p>

        <ul>
            <!-- 为何在v-for中使用key -->
            <li>1 必须使用key 且不能是index 和 random</li>
            <li>2 diff算法中通过tag和key判断 是否是sameNode</li>
            <li>3 减少渲染次数 提升渲染性能</li>
        </ul>

        <!-- 描述vue组件生命周期(父子组件) -->
        <p>1 单组件生命周期图</p>
        <p>2 父子组件生命周期关系</p>

        <!-- vue组件如何通讯0 -->
        <p>1 父子组件props和this.$emit</p>
        <p>2 自定义事件event.$no event.$off event.$emit</p>
        <p>3 vuex</p>

        <!-- 描述组件渲染和更新过程 -->

        <!-- 双向数据绑定v-model的实现原理 -->
        <p>1 input元素的value = this.name</p>
        <p>2 绑定input事件this.name = $event.target.value</p>
        <p>3 data更新触发re-render</p>

        <!-- 对MVVM的理解 -->

        <!-- computed有何特点 -->
        <p>1 缓存 data不变不会重新计算</p>
        <p>2 提高性能</p>

        <!-- 为什么组件data必须是一个函数 -->
        <p>每一个文件定义后其实都是一个class类 实例化后如果data不是函数 则数据会共享</p>

        <!-- ajax请求应该放在哪个生命周期里 -->
        <p>1 mounted</p>
        <p>2 js是单线程的 ajax异步获取数据</p>
        <p>3 放在mounted之前没有用 只会让逻辑更加混乱</p>

        <!-- 如何将组件所有的props传递给子组件 -->
        <p>$props</p>
        <p><User v-bind="$props" />方式传递</p>

        <!-- 如何自己实现v-model -->

        <!-- 多个组件有相同的逻辑 如何抽离 -->
        <p>mixin</p>
        <p>mixin的一些缺点</p>
     
        <!-- 何时使用异步组件 -->
        <p>1 加载大组件的时候</p>
        <p>2 路由异步加载的时候</p>

        <!-- 何时使用keep-alive -->
        <p>1 缓存组件 不需要重复渲染</p>
        <p>2 如多个静态tab页切换</p>
        <p>3 优化性能</p>

        <!-- 何时需要使用beforeDestory -->
        <p>1 接触自定义事件event.$off</p>
        <p>2 清除定时器</p>
        <p>3 解除自定义的DOM事件 如window scroll等</p>

        <!-- 什么是作用域插槽 -->

        <!-- vuex中action和mutation有何区别 -->
        <p>1 action处理异步 mutation中不可以</p>
        <p>2 mutation做原子操作(即单个操作)</p>
        <p>3 action可以整合多个mutation</p>

        <!-- vue-router常用路由模式 -->
        <p>hash默认</p>
        <p>H5 history需要服务端支持</p>

        <!-- 如何配置vue-router异步加载 -->

        <!-- 请用vnode描述一个DOM结构 -->

        <!-- 监听data变化的核心API是什么 -->
        <p>1 Object.defineProperty</p>
        <p>2 以及深度监听 监听数组</p>
        <p>3 有何缺点</p>

        <!-- Vue如何监听数组变化 -->
        <p>1 Object.defineProperty不能监听数组变化</p>
        <p>2 重新定义原型 重写push pop等方法 实现监听</p>
        <p>3 Proxy可以原生支持监听数组变化</p>

        <!-- 请描述响应式原理 -->
        <p>1 监听data变化</p>
        <p>2 组件渲染和更新的流程</p>

        <!-- diff算法的时间复杂度 -->
        <p>1 O(n)</p>
        <p>2 在O(n)的基础上做出了调整</p>

        <!-- 简述diff算法过程 -->
        <p>1 patch(elem,vnode)和patch(vnode,newVnode)</p>
        <p>2 patchVnode和addNodes和removeVnodes</p>
        <p>3 updateChildren(key的重要性)</p>

        <!-- vue为何是异步渲染 $nextTick何用 -->
        <p>1 异步渲染(以及合并data修改) 以及提高性能</p>
        <p>2 $nextTick在DOM更新完成之后 触发回调</p>

        <!-- Vue常见优化 -->
        <p>1 合理使用v-show v-if</p>
        <p>2 合理使用computed</p>
        <p>3 v-for时加key 以及避免和v-if同时使用</p>
        <p>4 自定义事件 DOM事件及时销毁</p>
        <p>5 合理使用异步组件</p>
        <p>6 合理使用keep-alive</p>
        <p>7 data层级不要太深</p>
        <p>8 使用vue-loader在开发环境做模板编译</p>
        <p>9 webpack层面的优化</p>
        <p>10 前端通用的优化 比如图片懒加载</p>
        <p>11 使用SSR</p>


    </main>
</template>

<script>
export default {
    
}
</script>

<style>

</style>