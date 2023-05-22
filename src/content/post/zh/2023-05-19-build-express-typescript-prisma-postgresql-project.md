---
title: '从 0 到 1 构建 Express / TypeScript / Prisma / PostgreSQL 应用'
tags:
  - 'Express'
  - 'TypeScript'
  - 'Prisma'
  - 'PostgreSQL'
draft: true
---

## TODO

- [ ] 初始化项目，安装 Express
- [ ] 工程化配置，Docker compose
- [ ] 环境变量
- [ ] 配置 Prisma
- [ ] nodemon
- [ ] body-parser
- [ ] cors
- [ ] 解决跨域问题

## 解决跨域问题

### 引入 cors 插件

```typescript
import express, { Express, Request, Response, NextFunction } from 'express'
const app: Express = express()
app.use(cors())
```

### 配置响应头

```typescript
import express, { Express, Request, Response, NextFunction } from 'express'
const app: Express = express()
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
```
