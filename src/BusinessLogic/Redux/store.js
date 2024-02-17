import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "./PhoneSlice";
import postReducer from "./PostSlice";
import profileReducer from "./ProfileSlice";
import searchReducer from "./SearchSlice";

export const store = configureStore({
  reducer: {
    phoneReducer,
    postReducer,
    profileReducer,
    searchReducer,
  },
});
