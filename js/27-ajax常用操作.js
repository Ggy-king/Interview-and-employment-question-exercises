$(function () {
    //请求参数
    var list = {};
    //
    $.ajax({
        //请求方式
        type: "POST",
        //请求的媒体类型
        contentType: "application/json;charset=UTF-8",
        //请求地址
        url: "http://127.0.0.1/admin/list/",
        //数据，json字符串
        data: JSON.stringify(list),
        //请求成功
        success: function (result) {
            console.log(result)
        },
        //请求失败
        error: function (err) {
            console.log(e.status)
            console.log(e.responseText)
        }
    })
})

// fetch方法  获取ajax
//axios方法  获取ajax