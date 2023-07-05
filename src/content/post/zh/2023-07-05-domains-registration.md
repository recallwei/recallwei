---
title: '注册域名'
tags:
  - 'Network'
---

## 使用 Name.com 注册域名

[Name.com 主站购买地址](https://www.name.com/)

### GitHub Students Pack

如果拥有 GitHub Students Pack，可以免费购买一年指定后缀的域名，例如 .studio, .ninja 等。

[GitHub Students Pack 购买地址](https://www.name.com/github-students)

## 将域名关联到 Vercel

### 使用 DNS（推荐）

CNAME 记录的传播通常非常快，通常修改后即可使用。

将 Vercel 提供的 CNAME 记录添加到 Name.com 域名的 DNS 解析服务器中。

### 使用 nameservers

域名服务器的传播通常需要 24 ~ 48 小时左右。

在 Name.com 注册完域名后，打开域名管理页面，选择域名解析服务器管理，将 Vercel 的域名解析服务器 `ns1.vercel-dns.com` 和 `ns2.vercel-dns.com` 添加到其中。
