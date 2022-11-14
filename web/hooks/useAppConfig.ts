import { appConfig } from "@constants";
import type { AppConfig } from "@interfaces";

export default function useAppConfig(): AppConfig {
  return appConfig;
}
