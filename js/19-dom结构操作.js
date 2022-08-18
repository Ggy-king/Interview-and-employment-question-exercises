// 新增删除获取移动元素

const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')

//新建节点
const newP = document.createElement('p')
newP.innerHTML = 'NewP is p'

//插入节点
div1.appendChild(newP)

//移动节点
const p1 = document.getElementById('p1')
div2.appendChild(p1)

// 获取父元素
console.log(p1.parentNode);  //打印父节点

// 获取子元素
const divChildNodes = div1.childNodes  //子元素列表 包括text文本
const divChildNode = Array.prototype.slice.call(div1.childNodes).filter( // 转化为数组并过滤
    child => {
        if (child.nodeType === 1) {
            return true
        }
    }
)

// 删除子元素
div1.removeChild(divChildNodes[0])
