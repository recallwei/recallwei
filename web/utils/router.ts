import { AppConfig } from "@config";
import { RouterIdType } from "@interfaces";

function convertPathToActiveNavbarItem(pathname: string): string | undefined {
  const firstLevelPathname = "/" + pathname.split("/")[1];
  const matchedRouterItem = AppConfig.navbar.items.find(
    (item) => item.to === firstLevelPathname
  );
  return matchedRouterItem?.name;
}

function getTitleByRouterId(id: RouterIdType): string | undefined {
  return AppConfig.navbar.items.find((item) => item.id === id)?.name;
}

export { convertPathToActiveNavbarItem, getTitleByRouterId };
