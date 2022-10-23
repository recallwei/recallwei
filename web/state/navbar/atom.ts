import { atom } from "recoil";

import { BuiltInNavbarRouter } from "@interfaces";

const activeNavbarItemState = atom<BuiltInNavbarRouter>({
  key: "activeNavbarItem",
  default: BuiltInNavbarRouter.Home,
});

export { activeNavbarItemState };
