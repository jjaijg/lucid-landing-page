import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import contactReducer from "./state/reducers/contactReducer";
import navReducer from "./state/reducers/navReducer";

const store = configureStore({
  reducer: {
    nav: navReducer,
    contact: contactReducer,
  },
  middleware: [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
