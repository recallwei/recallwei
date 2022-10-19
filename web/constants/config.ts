import type { AppConfigType } from "@interfaces";

const AppConfig: AppConfigType = {
  info: {
    name: "Bruce Song",
    description: "Hi, I am Bruce Song, this is my personal website.",
    motto: "信じて諦めなければ、夢は必ずかなう",
  },
  brand: {
    imageWidth: 32,
    imageHeight: 32,
    showSkeleton: true,
  },
  navbar: {
    isBordered: true,
    isCompact: true,
    shouldHideOnScroll: true,
  },
};

export { AppConfig };
