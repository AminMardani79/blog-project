import { createSlice } from "@reduxjs/toolkit";

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    loading: true,
    data: {},
    error: "",
  },
  reducers: {
    getBlogs(state, { payload: { loading, data, error } }) {
      state.loading = loading;
      state.data = data;
      state.error = error;
    },
  },
});

export const { getBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;
