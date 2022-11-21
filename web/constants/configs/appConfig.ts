import type { AppConfig } from "@interfaces";
export const appConfig: AppConfig = {
  // App 名称
  appName: "Bruce Song",
  // 导航栏
  navbar: {
    icon: {
      text: "Bruce Song",
      src: "/favicon.png",
      width: 32,
      height: 32,
      alt: "Bruce Song",
    },
    items: [
      { text: "主页", href: "/", type: "link", position: "left" },
      { text: "文档", href: "/docs", type: "link", position: "left" },
      { text: "链接", href: "/links", type: "link", position: "left" },
      { text: "链接", href: "/links", type: "link", position: "right" },
    ],
  },
};
