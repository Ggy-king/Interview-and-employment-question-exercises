/**
 * 1 ref
 * 2 defaultValue defaultChecked
 * 手动操作DOM元素
 */

// 非受控组件 通过default默认赋值给state  使用ref通过操作DOM元素改变默认值 即与state无关 相当于中转一次不受state控制

/**
 * 使用场景
 * 1 必须手动操作DOM元素 setState实现不了
 * 2 文件上传<input type=file>
 * 3 某些富文本编辑器 需要传入DOM元素
 */

// 优先使用受控组件
// 必须操作DOM时 在使用非受控组件