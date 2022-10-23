type RouterIdType = "home" | "docs";

type RouterType = {
  id: RouterIdType;
  name: string;
  to: string;
};

enum BuiltInNavbarRouter {
  "Home" = "主页",
  "Docs" = "博客",
}

export type { RouterType, RouterIdType };
export { BuiltInNavbarRouter };
