// 1 dom操作比较昂贵 避免频繁的操作
// 2 对dom查询做缓存
// 3 将频繁的操作改为一次性的操作  比如创建好的列表 最后插入

const list = document.getElementById('list')   //缓存

const frag = document.createDocumentFragment()  //创建一个文档片段 此时还没有插入到DOM树中

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    li.innerHTML = 'list item' + i
    frag.appendChild(li)
}

list.appendChild(frag)   //都完成之后 在插入dom树中