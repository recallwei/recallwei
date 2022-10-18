import { BuiltInRouters } from "@constants";

function convertPathToActiveNavbarItem(pathname: string): string | undefined {
  const firstLevelPathname = "/" + pathname.split("/")[1];
  const matchedRouterItem = BuiltInRouters.find(
    (item) => item.to === firstLevelPathname
  );
  return matchedRouterItem?.name;
}

export { convertPathToActiveNavbarItem };
