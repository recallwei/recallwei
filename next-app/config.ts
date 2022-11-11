import type { AppConfigType } from "@interfaces";
import { NavbarItems, DocsItems } from "@constants";

const AppConfig: AppConfigType = {
  info: {
    name: "Bruce Song",
    description: "Hi, I am Bruce Song, this is my personal website.",
    motto: "信じて諦めなければ、夢は必ずかなう",
  },
  brand: {
    imageWidth: 32,
    imageHeight: 32,
  },
  navbar: {
    isBordered: true,
    isCompact: true,
    shouldHideOnScroll: true,
    items: NavbarItems,
  },
  docs: {
    items: DocsItems,
  },
};

export { AppConfig };
