import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },
  reducers: {
    setDetails: (state, { payload }) => {
      const { name, value } = payload;
      state[name] = value;
    },
  },
});

export const { setDetails } = contactSlice.actions;

export default contactSlice.reducer;
