<template>
    <!-- 异步组件 -->
    <!-- 1 import()函数 -->
    <!-- 2 按需加载，异步加载大组件 -->

    <!-- - 异步引入组件

    ```js
    import {defineAsyncComponent} from 'vue'
    const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
    ```

  - 使用```Suspense```包裹组件，并配置好```default``` 与 ```fallback``` -->

    <Suspense>
        使用Suspense标签包裹需要异步的组件
    </Suspense>
</template>

<script>
export default {
    components: {
        CustomVModel:() => import('./CustomVModel.vue')   //异步引入 什么时候需要什么时候引入
    }
}
</script>

<style>

</style>