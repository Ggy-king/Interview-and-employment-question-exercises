// 触发视图更新
function updateView() {
    console.log('视图更新');
}

// 重新定义属性，监听起来
function defineReactive(target, key, value) {
    //深度监听
    observer(value)

    // 核心 API
    Object.defineProperty(target, key, {
        get() {
            return value
        },
        set(newValue) {
            if (newValue !== value) {
                //深度监听
                observer(newValue)

                // 设置新值
                // 注意，value一直在闭包中
                value = newValue

                //触发更新视图
                updateView()
            }
        }
    })
}

//监听对象属性
function observer(target) {
    if (typeof target !== 'object' || target === null) {
        // 不是对象或数组
        return target
    }
    //重新定义各个属性（for in 遍历）
    for (let key in target) {
        defineReactive(target, key, target[key])

    }
}

//准备数据
const data = {
    name: 'zhangsan',
    info: {
        address: '北京'  //深度监视
    },
    num: [10, 20, 30]
}
observer(data)

// 测试
data.name = 'lisi'

data.x = '100'  //新增属性 检测不到 - Vue.set
delete data.name  //删除属性 检测不到 - Vue.delete
