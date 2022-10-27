import { configureStore } from "@reduxjs/toolkit";

// Slice
import navbarReducer, { navbarAction } from "./navbarSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { navbarAction };
