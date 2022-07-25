import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
