type AppConfigType = {
  info: InfoConfig;
  brand: BrandConfig;
  navbar: NavbarConfig;
};

type InfoConfig = {
  name: string;
  description: string;
  motto: string;
};

type BrandConfig = {
  imageWidth: number;
  imageHeight: number;
  showSkeleton: boolean;
};

type NavbarConfig = { shouldHideOnScroll: boolean };

export type { AppConfigType };
