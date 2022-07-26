import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userReducer";
import bookReducer from "./bookSlice/bookSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
  },
});
