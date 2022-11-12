import type { AppConfig } from "@interfaces";

export default defineAppConfig<AppConfig>({
  appName: "Bruce Song", // App 名称
  // 导航栏
  navbar: {
    items: [
      { text: "主页", to: "/" },
      { text: "文档", to: "/dos" },
      { text: "链接", to: "/link" },
    ],
  },
});
