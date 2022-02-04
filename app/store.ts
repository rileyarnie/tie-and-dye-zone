import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "../features/navigation/sideBarSlice"

export const store = configureStore({
  reducer: {
    sidebar: sideBarReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
