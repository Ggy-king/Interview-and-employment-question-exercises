<template>
  <main>
    <p>1 模板不是html 有指令、插值、js表达式、能实现判断、循环</p>
    <p>2 html是标签语言 只有js能实现判断、循环(图灵完备)</p>
    <p>3 因此模板一定是转换为某种js代码 即编译模板</p>
  </main>

  <!-- 流程 -->
  <ul>
    <li>1 模板编译为render函数 执行render函数并返回vnode</li>
    <li>2 基于vnode再执行patch和diff</li>
    <li>3 使用webpack vue-loader  会在开发环境下编译模板</li>
  </ul>

  <!-- vue组件中也可以使用render代替template -->


  <p>响应式 监听data属性getter setter</p>
  <p>模板编译 模板到render函数 再到vnode</p>
  <p>vdom patch(elem,vnode)和patch(vnode,newVonde)</p>
</template>

<script>
export default {
    setup() {
        // const compiler = require('vue-template-compiler')  //引入插件 js中实现


        // 插值
        const template = `<p>message</p>`
        // 编译后代码
        // with(this){return _c('p',[_v(_s(message))])}
        // 上面的this是vm的实例  _c('p',[_v(_s(message))类似h 函数(h -> vnode)   里面的内容在vue源码中都可以找到
        // _c = createElement  _v = createTextVNode  _s = toString 

        // js表达式
        // {{}}  里层尖括号内就是正常当做js语法执行 比如三元表达式

        // 属性和动态属性
        const template2 = `
            <div id="div1" class="container">
                <img :src="imgUrl"/>
            </div>
        `
        //with(this) {return _c('div',
        //      {staticClass:"container",attrs:{"id":"div1"}},
        //         [_c('img',{attrs:{"src":imgUrl}})])}

        // 条件
        const template3 = `
            <div>
                <p v-if="flag === 'a'">A</p>    
                <p v-else>B</p>    
            </div>
        `
        // with(this){return _c('div',[(flag === 'a')?_c('p',[_v("A")]):_c('p',[_v("B")])])}

        // 循环
        const template4 = `
            <ul>
                <li v-for="item in list" :key="item.id">{{item.title}}</li>    
            </ul>
        `
        // with(this){return _c('ul',_l((list),function(item){return _c('li',{key:item.id},[_v(_s(item.title))])}),0)}
        // _l = renderList


        // 事件
        const template5 = `
            <button @click="clickHandler">submit</button>
        ` 
        // with(this){return _c('button',{on:{"click":clickHandler}},[_v("submit")])}


        // v-model
        const template6 = `<input type="text" v-model="name"/>`
        // 编译后的代码比较长
        // 要点 attrs:{"type":"text"},domProps:{"value":(name)},on:{"input":function($event){if($event.target.composing)return;name=$event.target.value}}

        // 编译  这一步是展示根本 在js中实现
        // const res = compiler.compiler(template)
        // console.log(res.render)
    }
}
</script>

<style>

</style>