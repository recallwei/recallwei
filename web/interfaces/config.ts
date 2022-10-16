type AppConfigType = {
  info: InfoConfig;
  brand: BrandConfig;
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

export type { AppConfigType };
