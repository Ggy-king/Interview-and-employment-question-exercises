// 多入口
module.exports = {
    entry: {
        index: path.join(srcPath, 'index.js'),
        other: path.join(srcPath, 'other.js')
    }
}

// 生成多文件的时候很多东西使用[] 实现多命名