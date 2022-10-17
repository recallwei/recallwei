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

export type { RouterConfigType, RouterType };
