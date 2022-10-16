import type { AppConfigType } from "@interfaces";

const AppConfig: AppConfigType = {
  info: {
    name: "Bruce Song",
    description: "Hi, I am Bruce Song, this is my personal website.",
    motto: "信じて諦めなければ、夢は必ずかなう",
  },
  brand: {
    imageWidth: 36,
    imageHeight: 36,
    showSkeleton: true,
  },
  navbar: {
    shouldHideOnScroll: true,
  },
};

export { AppConfig };
