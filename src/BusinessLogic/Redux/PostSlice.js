import { createSlice } from "@reduxjs/toolkit";
import { stateRedux } from "../State/stateRedux";

const state = stateRedux;
const postSlice = createSlice({
  name: "post",
  initialState: state,
  reducers: {
    like: (state, action) => {
      console.log("like", action.payload);
    },
  },
});

export const { like } = postSlice.actions;
export default postSlice.reducer;
