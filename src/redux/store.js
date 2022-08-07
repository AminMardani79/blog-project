import { configureStore } from "@reduxjs/toolkit";
import authorReducer from "./authors/authorsSlice";

export const store = configureStore({
  reducer: {
    authorsState: authorReducer,
  },
});
