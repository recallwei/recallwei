type AppConfigType = {
  name: string;
  brand: BrandConfig;
};

type BrandConfig = {
  imageWidth: number;
  imageHeight: number;
  showSkeleton: boolean;
};

export type { AppConfigType };
