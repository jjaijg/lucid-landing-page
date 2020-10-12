import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    scrollNav: false,
  },
  reducers: {
    setScrollNav: (state, { payload }) => {
      state.scrollNav = payload;
    },
  },
});

export const { setScrollNav } = navSlice.actions;

export default navSlice.reducer;
