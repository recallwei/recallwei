type RouterIdType = "HOME" | "DOCS";

type RouterType = {
  id: RouterIdType;
  name: string;
  to: string;
};

export type { RouterType, RouterIdType };
