import type { RouterType } from "@interfaces";
import { BuiltInNavbarRouter } from "@interfaces";

const NavbarItems: Array<RouterType> = [
  { id: "home", name: BuiltInNavbarRouter.Home, to: "/" },
  { id: "docs", name: BuiltInNavbarRouter.Docs, to: "/docs" },
];

export { NavbarItems };
