import type { RouterConfigType, RouterType } from "@interfaces";
import { BuiltInRouter } from "@interfaces";

const RouterConfig: RouterConfigType = {
  title: {
    home: "Bruce Song",
    blog: "博客",
    code: "代码",
    download: "文件",
  },
};

const BuiltInRouters: RouterType[] = [
  { name: BuiltInRouter.Home, to: "/" },
  { name: BuiltInRouter.Blog, to: "/docs" },
  { name: BuiltInRouter.Code, to: "/code" },
  { name: BuiltInRouter.Download, to: "/download" },
];

export { RouterConfig, BuiltInRouters };
