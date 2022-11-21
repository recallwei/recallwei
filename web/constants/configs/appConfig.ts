import type { AppConfig } from "@interfaces";
export const appConfig: AppConfig = {
  // App 名称
  appName: "Bruce Song",
  // 导航栏
  navbar: {
    icon: {
      text: "Bruce Song",
      src: "/favicon.png",
      href: "/",
      width: 32,
      height: 32,
      alt: "Bruce Song",
    },
    items: [
      { text: "文档", href: "/docs", type: "link", position: "left" },
      { text: "链接", href: "/links", type: "link", position: "left" },
      {
        text: "Wiki",
        href: "https://wiki.bruceworld.top",
        type: "link",
        position: "right",
      },
      {
        text: "Taskward",
        href: "https://taskward.bruceworld.top",
        type: "link",
        position: "right",
      },
      {
        text: "Resume Generator",
        href: "https://resume.bruceworld.top",
        type: "link",
        position: "right",
      },
      {
        text: "recallwei",
        src: "/icons/github.png",
        href: "https://github.com/recallwei",
        width: 22,
        height: 22,
        alt: "recallwei",
        type: "icon",
        position: "right",
      },
    ],
  },
};
