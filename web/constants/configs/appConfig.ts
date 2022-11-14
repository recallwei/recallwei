import type { AppConfig } from "@interfaces";
export const appConfig: AppConfig = {
  // App 名称
  appName: "Bruce Song",
  // 导航栏
  navbar: {
    items: [
      { text: "主页", href: "/" },
      { text: "文档", href: "/docs" },
      { text: "链接", href: "/links" },
    ],
  },
};
