import type { RouterConfigType, RouterType } from "@interfaces";

const RouterConfig: RouterConfigType = {
  title: {
    home: "Bruce Song",
    blog: "博客",
  },
};

const BuiltInRouters: RouterType[] = [
  { name: "Home", to: "/" },
  { name: "Blog", to: "/blog" },
  { name: "Code Snippets", to: "/code-snippets" },
  { name: "Download Files", to: "/download-files" },
];

export { RouterConfig, BuiltInRouters };
