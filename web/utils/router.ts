import { AppConfig } from "@config";
import { RouterIdType } from "@interfaces";

function getActiveNavbarItemIdByRoute(pathname: string): RouterIdType {
  const firstLevelPathname = "/" + pathname.split("/")[1];
  const matchedRouterItem = AppConfig.navbar.items.find(
    (item) => item.to === firstLevelPathname
  );
  return matchedRouterItem?.id as RouterIdType;
}

function getTitleByRouterId(id: RouterIdType): string | undefined {
  return AppConfig.navbar.items.find((item) => item.id === id)?.name;
}

export { getActiveNavbarItemIdByRoute, getTitleByRouterId };
