import { appConfig } from "@config";
import type { AppConfig } from "@interfaces";

const useAppConfig = (): AppConfig => {
  return appConfig;
};

export default useAppConfig;
