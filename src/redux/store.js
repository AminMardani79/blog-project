import { configureStore } from "@reduxjs/toolkit";
import authorReducer from "./authors/authorsSlice";
import blogReducer from "./blogs/blogsSlice";

export const store = configureStore({
  reducer: {
    authorsState: authorReducer,
    blogsState: blogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
