---
title: 'CRLF 和 LF 冲突'
tags:
  - 'Git'
---

CRLF 其中 CR (Carriage Return) 代表回车， LF (Line Feed) 代表换行，一般 Windows 操作系统使用 CRLF 作为默认的文件换行模式，macOS 或 Linux 使用 LF 作为默认的文件换行模式。为了保持一致性，一般我们**使用 LF 作为远程存储库的文件换行模式**。

造成冲突的原因：使用 Windows 系统的电脑克隆远程存储库时，会自动将文件的换行模式转换为 CRLF。

## VS Code 改变默认换行标准

在 VS Code 用户设置的 JSON 文件中添加如下设置，可以将默认的换行模式调整为 LF。

```json
{
  "files.eol": "\n"
}
```

同理，如果要将换行模式调整为 CRLF。

```json
{
  "files.eol": "\r\n"
}
```

## 配置 Git core.autocrlf

提交时转化为 LF，拉取时转换为 CRLF。

```bash
git config --global core.autocrlf true
```

提交与拉取时均不转换（Linux 与 macOS 操作系统建议使用该配置）。

```bash
git config --global core.autocrlf false
```

提交时转化为 LF，拉取时不转换（Windows 操作系统建议使用该配置）。

```bash
git config --global core.autocrlf input
```

## 配置 Git core.safecrlf

禁止提交混合换行符的文本文件（`git add` 的时候会被拦截，提示异常）。

```bash
git config --global core.safecrlf true
```

默认配置，不禁止提交混合换行符的文本文件。

```bash
git config --global core.safecrlf false
```

提交混合换行符的文本文件的时候会发出警告，但是不会阻止 `git add` 操作。

```bash
git config --global core.safecrlf warn
```

## 配置 .gitattributes

以上 `core.autocrlf` 与 `core.safecrlf` 都是在本地的个性化设置。对于多人协作的大项目，建议在项目根目录添加一个 `.gitattributes` 文件，其优先级高于本地的 Git 配置。
