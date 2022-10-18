type RouterConfigType = {
  title: Title;
};

type Title = {
  home: string;
  blog: string;
  code: string;
  download: string;
};

type RouterType = {
  name: string;
  to: string;
};

enum BuiltInRouter {
  "Home" = "主页",
  "Blog" = "博客",
  "Code" = "代码",
  "Download" = "下载",
}

export type { RouterConfigType, RouterType };
export { BuiltInRouter };
