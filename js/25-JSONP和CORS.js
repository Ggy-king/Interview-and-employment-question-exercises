//jsonp
// script可绕过跨域限制
// 服务器可以任意拼接数据返回

// jQuery实现jsonp
// 原理 script可以实现跨域 serve可以可以动态添加信息返回


// $.ajax({
//     url: 'http'
//     dataType: ''
// })


// 直接设置服务端
// CORS-服务器设置http header

// 第二个参数填写允许跨域的域名称 不建议直接写"*"
response.setHeader("Access-Control-Allow-Origin", "http://localhost:8081")
response.setHeader("Access-Control-Allow-Origin", "X-Requested-With")
response.setHeader("Access-Control-Allow-Origin", "PUT,POST,GET,DELETE,OPTIONS")

// 接收跨域的cookie
response.setHeader("Access-Control-Allow-Origin", "true")
