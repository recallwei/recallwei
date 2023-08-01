---
title: '关于 npm package.json 配置'
tags:
  - 'npm'
---

## 依赖相关

### dependencies

dependencies 是项目运行时必须的依赖，比如 react、vue、lodash、moment 等。
npm 官方文档中，建议我们不要将开发相关的依赖放入到 dependencies 中，而是放入到 devDependencies 中。

### devDependencies

devDependencies 是项目开发时需要的依赖，比如 vite、typescript、webpack、babel 等。

### peerDependencies

peerDependencies 是项目运行时需要的依赖，但是这些依赖不会被安装到项目中，而是需要用户自己安装。比如 react、vue 等。
封装插件的时候常用到 peerDependencies，比如封装 eslint 插件，我们需要依赖 eslint，但是我们不需要将 eslint 安装到项目中，而是需要用户自己安装。
