import { atom } from "recoil";

import { RouterIdType } from "@interfaces";

const activeNavbarItemState = atom<RouterIdType>({
  key: "activeNavbarItem",
  default: "HOME",
});

export { activeNavbarItemState };
