import { atom } from "recoil";

import { BuiltInRouter } from "@interfaces";

const activeNavbarItemState = atom<BuiltInRouter>({
  key: "activeNavbarItem",
  default: BuiltInRouter.Home,
});

export { activeNavbarItemState };
