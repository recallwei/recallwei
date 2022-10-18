import { BuiltInRouters } from "@constants";

function convertPathToActiveNavbarItem(pathname: string): string | undefined {
  const matchedRouterItem = BuiltInRouters.find((item) => item.to === pathname);
  return matchedRouterItem?.name;
}

export { convertPathToActiveNavbarItem };
