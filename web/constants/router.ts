import type { RouterConfigType, RouterType } from "@interfaces";

const RouterConfig: RouterConfigType = {
  title: {
    home: "Bruce Song",
    blog: "博客",
    code: "代码",
    download: "文件",
  },
};

const BuiltInRouters: RouterType[] = [
  { name: "Home", to: "/" },
  { name: "Blog", to: "/blog" },
  { name: "Code Snippets", to: "/code" },
  { name: "Download Files", to: "/download" },
];

export { RouterConfig, BuiltInRouters };
