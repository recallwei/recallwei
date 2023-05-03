---
title: '前端工程化'
tags:
  - 'Front-end Engineering'
draft: true
---

## CSpell

CSpell (Code Spell Check): https://cspell.org/

### CLI

检查所有文件

```bash
cspell "**"
```

```bash
cspell --no-progress --show-suggestions --show-context "**"
```

## Editor Config

## Prettier

## 提交信息规范

### Husky 操作 Git Hook

### lint-staged 检查本地暂存区代码

```bash
npm install -D lint-staged
yarn add -D lint-staged
pnpm add -D lint-staged
```

```json
{
  "*.{js,jsx,ts,tsx,vue}": ["eslint --fix"]
}
```

### commitlint - 校验 Commit 信息

```bash
npm install -D commitlint @commitlint/config-conventional
yarn add -D commitlint @commitlint/config-conventional
pnpm add -D commitlint @commitlint/config-conventional
```

### commitizen - 辅助输入 Commit 信息

[什么是前端工程化？](https://juejin.cn/post/6917447582985748493)

[我所理解的前端工程化](https://godbasin.github.io/2022/02/07/front-end-engineering/)

[前端工程化](https://juejin.cn/post/7144960831409618981#heading-11)
