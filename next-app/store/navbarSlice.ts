import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RouterIdType } from "@interfaces";

interface NavbarState {
  activeNavbarItem: RouterIdType;
}

const initialState: NavbarState = {
  activeNavbarItem: "HOME",
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    changeActiveNavbarItem: (state, action: PayloadAction<RouterIdType>) => {
      state.activeNavbarItem = action.payload;
    },
  },
});

export const navbarAction = navbarSlice.actions;

export default navbarSlice.reducer;
