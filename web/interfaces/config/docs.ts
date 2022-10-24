type DocType = {
  id: string;
  title: string;
  description?: string;
  finishedAt?: string;
  draft?: boolean;
};

type DocChannelType = {
  id: string;
  title: string;
  description?: string;
  finishedAt?: string;
  draft?: boolean;
  items: Array<DocType | DocChannelType>;
};

export type { DocType, DocChannelType };
