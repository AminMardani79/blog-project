import { createSlice } from "@reduxjs/toolkit";
const authorsSlice = createSlice({
  name: "authors/getAuthors",
  initialState: {
    authorsLoading: true,
    authors: {},
    authorError: "",
  },
  reducers: {
    getAuthors(state, { payload: { loading, data, error } }) {
      state.authorsLoading = loading;
      state.authors = data;
      state.authorError = error;
    },
  },
});

export const { getAuthors } = authorsSlice.actions;
export default authorsSlice.reducer;
