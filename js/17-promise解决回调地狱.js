// 解决回调地狱
// promise 使函数永远只有一层 不会出现嵌套

function getData(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        })
    })
}
const url = 'http://www.xxx.com'

const url1 = '/data1.json'
const url2 = '/data2.json'
const url3 = '/data3.json'

getData(url1).then(data1 => {
    console.log(data1);
    return getData(url2)
}).then(data2 => {
    console.log(data2);
    return getData(url3)
}).then(data3 => {
    console.log(data3);
}).catch(err => console.log(error(err)))