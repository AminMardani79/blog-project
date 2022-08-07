import { createSlice } from "@reduxjs/toolkit";
const authorsSlice = createSlice({
  name: "authors",
  initialState: {
    loading: true,
    data: [],
    error: "",
  },
  reducers: {
    getAuthors(state, { payload: { loading, data, error } }) {
      state.loading = loading;
      state.data = data;
      state.error = error;
    },
  },
});

export const { getAuthors } = authorsSlice.actions;
export default authorsSlice.reducer;
