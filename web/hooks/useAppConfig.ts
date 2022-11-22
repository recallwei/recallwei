import { appConfig } from "@config";
import type { AppConfig } from "@interfaces";

export default function useAppConfig(): AppConfig {
  return appConfig;
}
