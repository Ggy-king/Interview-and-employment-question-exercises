<template>

<!-- 1 路由模式(hash H5 history) -->
<!-- 2 路由配置(动态路由 懒加载) -->
 

 
</template>

<script>
// export default {

//     setup(props) {
//         const User = {
//             //获取参数10 20
//             template: '<div>User {{$route.params.id}}</div>'
//         }
//         const router = new VueRouter({
//             routes: [
//                 //动态路径参数 以冒号开头 可以命中'/user/10' '/user/20' 等路径的格式
//                 {
//                     path: 'user/:id',components:User
//                 } 
//             ]
//         })
//     }
// }

// 路径组件的懒加载
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import(
                /* webpackChunkName:"home" */
                '组件路径'
            )
        },
        {
            path: '/acc',
            component: () => import(
                /* webpackChunkName:"acc" */
                '组件路径'
            )
        }
    ]
})
</script>

<style>

</style>