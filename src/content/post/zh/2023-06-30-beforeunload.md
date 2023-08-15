---
title: '监听浏览器关闭或刷新事件'
tags:
  - 'Web API'
---

`beforeunload` 是一个 Web API 事件，它在浏览器窗口即将卸载（unload）当前页面时触发。这通常发生在用户关闭窗口、刷新页面或导航至其他页面时。可以使用 beforeunload 事件在这些情况下执行特定操作，例如：

- 提示用户保存未保存的更改。
- 释放资源，如 `WebSockets` 连接。
- 发送统计数据或诊断信息。

在实际应用中，应谨慎使用 `beforeunload` 事件，因为它可能会影响用户体验。只有在确实需要在页面关闭或刷新之前执行某些操作时，才应使用此事件。

```javascript
window.addEventListener('beforeunload', (event) => {
  // 此处执行关闭或刷新前的代码
  // ...

  // 禁止浏览器默认关闭、刷新事件
  event.preventDefault()
  // Chrome 需要设置 returnValue 属性
  event.returnValue = ''
})
```

Vue 3 可以在 `onMounted` 生命周期中监听 `beforeunload` 事件, 并在 `onUnmounted` 生命周期中移除监听。

```vue
<script>
const beforeUnloadHandler = (event) => {
  // 此处执行关闭或刷新前的代码
  // ...
}

onMounted(() => window.addEventListener('beforeunload', beforeUnloadHandler))
onUnmounted(() =>
  window.removeEventListener('beforeunload', beforeUnloadHandler)
)
</script>
```

Vue 2 可以在 `mounted` 生命周期中监听 `beforeunload` 事件, 并在 `beforeDestroy` 生命周期中移除监听。

```vue
<script>
export default {
  name: 'MyComponent',
  mounted() {
    // 绑定事件监听器
    window.addEventListener('beforeunload', this.beforeUnloadHandler)
  },
  beforeDestroy() {
    // 移除事件监听器
    window.removeEventListener('beforeunload', this.beforeUnloadHandler)
  },
  methods: {
    beforeUnloadHandler(event) {
      // 此处执行关闭或刷新前的代码
      // ...

      // 禁止浏览器默认关闭、刷新事件
      event.preventDefault()
      // Chrome 需要设置 returnValue 属性
      event.returnValue = ''
    }
  }
}
</script>
```

## 参考

[MDN: Window: beforeunload event](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event)
