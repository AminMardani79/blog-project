import { createSlice } from "@reduxjs/toolkit";

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    blogsLoading: true,
    blogs: {},
    blogsError: "",
  },
  reducers: {
    getBlogs(state, { payload: { loading, data, error } }) {
      state.blogsLoading = loading;
      state.blogs = data;
      state.blogsError = error;
    },
  },
});

export const { getBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;
