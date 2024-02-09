import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "./PhoneSlice";
import postReducer from "./PostSlice";
import profileReducer from "./ProfileSlice";

export const store = configureStore({
  reducer: {
    phoneReducer,
    postReducer,
    profileReducer,
  },
});
