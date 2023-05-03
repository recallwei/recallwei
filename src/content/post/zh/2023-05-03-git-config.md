---
title: 'Git 设置'
tags:
  - 'Git'
draft: true
---

Git 配置具有三个级别，依次是 **System**、**Global**、**Local**，后面的配置会覆盖前面的配置。

## 查看系统的配置

```bash
git config --system --list
```

## 查看当前用户的配置

```bash
git config --global --list
```

## 查看当前仓库的配置

```bash
git config --local --list
```

## 更改用户名和邮箱

修改全局的用户名、邮箱。

```bash
git config --global user.name "Bruce"
git config --global user.email "recall4056@gmail.com"
```

可以根据项目，设置自己 Git 提交的用户名和邮箱。

```bash
git config --local user.name "Bruce"
git config --local user.email "recall4056@gmail.com"
```

## 配置代理

配置 Git 代理，需要禁用 SSL 验证、设置代理服务器地址。

```bash
git config http.sslVerify false
git config http.proxy http://127.0.0.1:7890
```

## 配置全局代理

配置全局代理后，无需为每个存储库分别设置代理。

```bash
git config --global http.sslVerify false
git config --global http.proxy http://127.0.0.1:7890
```
