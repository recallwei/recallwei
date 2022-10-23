type DocType = {
  id: string;
  title: string;
};

type DocChannelType = {
  id: string;
  title: string;
  items: Array<DocType | DocChannelType>;
};

export type { DocType, DocChannelType };
