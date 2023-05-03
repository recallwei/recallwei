---
title: '使用 Astro 构建博客'
tags:
  - 'Astro'
---

## 建立 Astro 项目

```bash
pnpm create astro@latest
```

## 前端工程化配置

### 添加 CSpell

```bash
cspell "**"
```

### 添加 Prettier

使用 [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro/)

注意 pnpm 执行 Prettier 格式化命令需要额外配置。

## 添加 React

[Astro 添加 React](https://docs.astro.build/en/guides/integrations-guide/react/)

## 添加 TailwindCSS

[Astro 添加 TailwindCSS](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

如何让 VSCode TailwindCSS IntelliSense 支持 Astro？

```json
{ "tailwindCSS.classAttributes": ["class", "className", "ngClass", "class:list"] }
```

- 添加黑暗模式

## 添加 MDX

[Astro 添加 MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/)

## 配置 Vercel SSR

[Astro 配置 Vercel SSR](https://docs.astro.build/guides/deploy/vercel/)

Vercel SSR 必须配置 vercel.json 如下，否则访问不存在的页面不会重定向到 404 页面。

```json
{
  "cleanUrls": true
}
```

## 配置 Markdown Remark Rehype 插件

## 添加 NProgress

利用事件监听器监听 `beforeunload` 和 `DOMContentLoaded` 事件，封装 NProgressProvider 组件以实现 MPA 的 NProgress。

```tsx
import React, { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

type Props = {
  children: React.ReactNode
}

export default function NProgressProvider({ children }: Props): JSX.Element {
  useEffect(() => {
    window.addEventListener('beforeunload', () => NProgress.start())
    window.addEventListener('DOMContentLoaded ', () => NProgress.done())
    return () => {
      window.removeEventListener('beforeunload', () => NProgress.start())
      window.removeEventListener('DOMContentLoaded', () => NProgress.done())
    }
  }, [])
  return <>{children}</>
}
```

## 封装布局组件

- Header
- Content
- Footer

## 配置 Icon

```bash
pnpm add -D @iconify/json unplugin-icons
```

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  vite: {
    plugins: [
      Icons({
        compiler: 'astro'
      })
    ]
  }
})
```

---

## TODO

- [ ] 添加 Astro Sitemap
