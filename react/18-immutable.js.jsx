// immutable
// 1 彻底拥抱 不可变值
// 2 基于共享数据(不是深拷贝) 速度快
// 3 有一定的学习和迁移成本 按需使用

const map1 = Immutable.Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 50)
map1.get('b') // 2
map2.get('b') // 50

