<template>
    <nav>循环(列表)渲染</nav>
    <main>
        <p>如何遍历对象 -- 也可以使用v-for</p>
        <p>key的重要性 key不能乱写(如random或者index)</p>
        <p>v-for和v-if不能一起使用</p>
    </main>


    <nav>事件</nav>
    <main>
        <p>event参数 自定义参数</p>
        <p>事件修饰符，按键修饰符</p>


        <!-- 阻止单击事件继续传播 -->
        <a v-on:click.stop="doThis"></a>
        <!-- 提交事件不在重新加载页面 -->
        <form v-on:submit.prevent="onSubmit"></form>
        <!-- 修饰符可以串联 -->
        <a v-on:click.stop.prevent="doThis"></a>
        <!-- 只有修饰符 -->
        <from v-on:submit.prevent></form>
        <!-- 添加监听事件使用事件捕获模式 -->
        <!-- 即内部元素触发的事件先在此处理 然后才交到内部元素处理 -->
        <div v-on:click.capture="daThis"></div>
        <!-- 只当在event.target是当前元素自身触发时处理函数 -->
        <!-- 即事件不是从内部开始触发的 -->
        <div v-on:click.self="doThis"></div>

        <!-- 即使alt和shift被一同按下也可以触发 -->
        <button @click.ctrl="onClick"></button>
        <!-- 有且只有Ctrl被按下时才能触发事件 -->
        <button @click.ctrl.exact="onClick"></button>
        <!-- 没有任何系统修饰符被按下时触发 -->
        <button @click.exact="onClick"></button>


        <p>观察事件被绑定到哪里了</p>
    </main>

    <nav>表单</nav>
    <main>
        <p>v-model</p>
        <p>常见的表单项textarea checkbox radio select</p>
        <!-- 下拉列表值v-model值为数组 -->
        <p>修饰符 lazy number trim</p>
        <!-- 防抖的效果 -->
        <input type="text" v-model.lazy="name">
        <!-- 转化为数字 -->
        <input type="text" v-model.number="name">
        <!-- 截取前面的空格 -->
        <input type="text" v-model.trim="name">
    </main>
</template>

<script>
export default {

}
</script>

<style>

</style>