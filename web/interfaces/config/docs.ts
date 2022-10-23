type DocType = {
  id: string;
  title: string;
  draft?: boolean;
};

type DocChannelType = {
  id: string;
  title: string;
  draft?: boolean;
  items: Array<DocType | DocChannelType>;
};

export type { DocType, DocChannelType };
