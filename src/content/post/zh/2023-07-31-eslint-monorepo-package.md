---
title: '如何在 Monorepo 中管理 ESLint 配置'
tags:
  - 'ESLint'
  - 'Monorepo'
  - 'Front-end Engineering'
---

最近，我在构建一个基于 Monorepo 架构的后台管理系统。其中有前端 Vue 项目、后端 Node.js 项目、文档项目和各种工具类库等。
由于不同项目对于 ESLint 的配置不同，我需要在 Monorepo 中统一管理多个 ESLint 配置。对此，我做了一些挣扎，本文将记录下来。

## 项目结构

```plaintext
├── node_modules
├── docs
│   └── package.json
├── server
│   └── package.json
├── web
│   └── package.json
├── packages
│   └── eslint-config
│       ├── CHANGELOG.md
│       ├── index.js
│       └── package.json
├── CHANGELOG.md
├── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
```

## 使用的技术栈

- pnpm workspace - Monorepo 管理工具
- changeset - 管理包版本和发布
- ESLint - 代码规范检查工具

## 常用的 ESLint 配置

| 配置名称                          | 说明                                                 |         使用场景         |
| --------------------------------- | ---------------------------------------------------- | :----------------------: |
| @typescript-eslint/eslint-plugin  | TypeScript ESLint 插件                               |            TS            |
| @typescript-eslint/parser         | 用于解析 TypeScript 语法的 ESLint 解析器             |            TS            |
| vue-eslint-parser                 | 用于解析 Vue 语法的 ESLint 解析器                    |           Vue            |
| eslint-config-airbnb              | 适用于 React 项目（因为其中包含了对 JSX 的校验规则） |          React           |
| eslint-config-airbnb-base         | Airbnb JS 规范，适用于非 React 项目                  | 非 React 框架，如 Vue 等 |
| eslint-config-airbnb-typescript   | Airbnb TS 规范，适用于 TypeScript 项目               |            TS            |
| eslint-plugin-vue                 | 规范 Vue 语法                                        |           Vue            |
| eslint-plugin-node                | 规范 Node 语法                                       |           Node           |
| eslint-plugin-simple-import-sort  | 规范 import、export 语句的顺序                       |            \*            |
| eslint-plugin-import              | 规范 ES6+ import、export 语法                        |           ES6+           |
| eslint-import-resolver-typescript | 解决 TypeScript 项目中 import 语句的路径问题         |            \*            |
| eslint-plugin-unused-imports      | 规范未使用的 import 语句                             |            \*            |
| eslint-plugin-tailwindcss         | 规范 TailwindCSS 语法，支持类名排序、简写合并        |       TailwindCSS        |
| eslint-config-prettier            | 解决 ESLint 与 Prettier 的冲突                       |         Prettier         |

## 构建 Monorepo 下的 ESLint 配置

### 在 Monorepo 中创建 eslint-config 子项目

在 /packages 目录下创建 eslint-config 子项目，用于管理 ESLint 配置。

```bash
mkdir packages/eslint-config
cd packages/eslint-config
pnpm init -y
```

### 在 eslint-config 子项目中安装 ESLint 所需要的相关依赖

这个项目中，使用了 TypeScript、Vue、TailwindCSS，语法风格上使用了 Airbnb 规范，所以需要安装与这些相关的 ESLint 配置。

```bash
pnpm add --filter=@dolphin-admin/eslint-config -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-vue eslint-plugin-simple-import-sort eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-unused-imports eslint-plugin-tailwindcss eslint-config-prettier eslint-define-config
```

### 配置 @dolphin-admin/eslint-config

package.json

```json
{
  "name": "@dolphin-admin/eslint-config",
  "files": ["index.js"],
  "main": "index.js"
}
```

### 使用 eslint-define-config 获得 ESLint 配置的提示

添加 `eslint-define-config` 依赖可以包裹 ESLint 配置，使得在使用 ESLint 配置的时候可以获得提示。

```javascript
const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  // ...
})
```

## 使用 Changesets 管理包版本

### 配置 Changesets

```bash
pnpm add -Dw @changesets/cli
pnpm changeset init
```

### 发布包

```bash
pnpm changeset
pnpm changeset version
pnpm -r publish --access=public # 发布到 npm，-r 表示递归 Monorepo 子包，--access=public 表示发布 npm 共有包
```

## 参考

- [在 pnpm 中使用 Changesets](https://pnpm.io/zh/using-changesets)
