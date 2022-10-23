import type { RouterType, DocType, DocChannelType } from "@interfaces";

type AppConfigType = {
  info: InfoConfig;
  brand: BrandConfig;
  navbar: NavbarConfig;
  docs: DocsConfig;
};

type InfoConfig = {
  name: string;
  description: string;
  motto: string;
};

type BrandConfig = {
  imageWidth: number;
  imageHeight: number;
};

type NavbarConfig = {
  isBordered: boolean;
  isCompact: boolean;
  shouldHideOnScroll: boolean;
  items: Array<RouterType>;
};

type DocsConfig = {
  items: Array<DocType | DocChannelType>;
};

export type { AppConfigType };
