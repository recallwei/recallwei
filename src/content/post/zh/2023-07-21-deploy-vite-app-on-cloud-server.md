---
title: '在云服务器上部署 Vite 应用'
tags:
  - 'Server'
---

## 配置 Nginx

### 安装 Nginx

```bash
yum -y install nginx # 使用 yum 安装 Nginx
nginx -v # 查看 Nginx 版本，验证安装成功
systemctl enable nginx # 设置 Nginx 开机自启
systemctl start nginx # 启动 Nginx
firewall-cmd --permanent --zone=public --add-port=80/tcp # 防火墙开放 80 端口（HTTP 默认端口）
firewall-cmd --reload # 重载防火墙
```

### 查看 Nginx 是否在运行

```bash
ps -ef | grep nginx
```

### 验证 Nginx 是否能返回请求

```bash
curl localhost
```

上述命令能查看到 Nginx 的欢迎页面，说明 Nginx 已经安装成功。

### 配置静态站点

```conf
server {
  server_name front-end.domain;
  charset 'utf-8';

  root /usr/share/nginx/dist;

  location / {
    try_files $uri $uri/ /index.html;
  }

  location /base-api/ {
    proxy_pass https://back-end.domain/;
  }

  location = /favicon.ico {
    access_log off;
    log_not_found off;
  }
  location = /robots.txt {
    access_log off;
    log_not_found off;
  }

  listen 443;
}
```

### 验证配置文件是否正确

```bash
nginx -t
```

### 重载站点

```bash
nginx -s reload
```

### Nginx 无法绑定其他端口

SELinux 在 enforcing 模式下仅允许绑定如下列出端口：

```bash
semanage port -l | grep http_port_t
http_port_t  tcp  80, 81, 443, 488, 8008, 8009, 8443, 9000
```

如果需要绑定其他端口，需要执行如下命令：

```bash
semanage port -a -t http_port_t  -p tcp 8090
```

## 配置 HTTPS 证书

### 安装 Certbot

```bash
yum install certbot
yum install python3-certbot-nginx
```

### 生成证书

```bash
sudo certbot --nginx -d 【Domain Name】
```
