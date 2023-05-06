---
title: 'TypeScript 类型常用技巧'
tags:
  - 'TypeScript'
---

## 字符串数组转字符串联合类型

```typescript
const options = <const>['Option A', 'Option B', 'Option C']

export type Option = (typeof options)[number]
```

```typescript
type Option = 'Option A' | 'Option B' | 'Option C'
```
