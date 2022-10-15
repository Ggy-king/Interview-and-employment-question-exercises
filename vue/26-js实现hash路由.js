// 稍微复杂一点的SPA 都需要路由
// vue-router 也是vue全家桶的标配之一
// 属于 和日常使用相关联原理

// 回顾路由
location.protocol  //http:
location.hostname   //127.0.0.1
location.host    //127.0.0.1:8080
location.port    //8080
location.pathname  //  /01-hash.html
location.search  //?a=100&b=20
location.hash  //#/aaa/bbb

// hash
/**
 * hash变化会触发网页跳转 即浏览器前进后退
 * hash变化不会刷新页面 SPA必需的特点
 * hash永远不会提交到serve端(前端自生自灭)
 */

// H5 history

// To B的系统推荐使用hash 简单易用 对url不敏感
// To C的系统推荐使用H5 history 但需要服务端支持
// 能选择简单的 就别用复杂的 考虑成本和收益