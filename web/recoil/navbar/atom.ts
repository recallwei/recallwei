import { atom } from "recoil";

import { BuiltInRouter } from "@interfaces";

const activeSidebar = atom<BuiltInRouter>({
  key: "activeSidebar",
  default: BuiltInRouter.Home,
});

export { activeSidebar };
