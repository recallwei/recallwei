---
title: '优化 Vite 构建'
tags:
  - 'Vite'
draft: true
---

## 在构建时移除 `console` 和 `debugger`

```javascript
export default defineConfig({
  esbuild: {
    drop: ['console', 'debugger']
  }
})
```
