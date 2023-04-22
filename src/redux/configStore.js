import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    UserReducer
  },
});
