import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "./PhoneSlice";
import postReducer from "./PostSlice";

export const store = configureStore({
  reducer: {
    phoneReducer,
    postReducer,
  },
});
