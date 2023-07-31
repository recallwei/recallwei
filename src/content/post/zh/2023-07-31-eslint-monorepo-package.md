---
title: '使用 Monorepo 管理 ESLint 配置'
tags:
  - 'ESLint'
  - 'Monorepo'
  - 'Front-end Engineering'
---

## 项目结构

```plaintext
├── node_modules
├── packages
│   ├── basic
│   │   ├── CHANGELOG.md
│   │   ├── index.js
│   │   └── package.json
│   ├── typescript
│   │   ├── CHANGELOG.md
│   │   ├── index.js
│   │   └── package.json
│   └── vue
│       ├── CHANGELOG.md
│       ├── index.js
│       └── package.json
├── CHANGELOG.md
├── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
```

## 使用的技术栈

- Monorepo（基于 pnpm workspace 和 changeset）
- ESLint

## 常用的 ESLint 配置

| 配置名称                          | 说明                                                 |         使用场景         |
| --------------------------------- | ---------------------------------------------------- | :----------------------: |
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
| eslint-plugin-prettier            | 解决 ESLint 与 Prettier 的冲突                       |         Prettier         |

## 使用 eslint-define-config 获得 ESLint 配置的提示

添加 `eslint-define-config` 依赖可以包裹 ESLint 配置，使得在使用 ESLint 配置的时候可以获得提示。

```javascript
const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({})
```

## 配置 @bruce/eslint-config-basic

package.json

```json
{
  "name": "@bruce/eslint-config-basic"
}
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
pnpm -r publish
```

## 参考

- [在 pnpm 中使用 Changesets](https://pnpm.io/zh/using-changesets)
