import type { DocType, DocChannelType } from "@interfaces";

function getDocItem(id: string, title: string): DocType {
  return { id, title };
}

function getDocChannelItem(
  id: string,
  title: string,
  items: Array<DocType | DocChannelType>
): DocChannelType {
  return { id, title, items };
}

export { getDocItem, getDocChannelItem };
