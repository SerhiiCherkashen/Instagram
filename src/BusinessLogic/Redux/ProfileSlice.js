import { createSlice } from "@reduxjs/toolkit";
import { stateRedux } from "../State/stateRedux";

const state = stateRedux;
const profileSlice = createSlice({
  name: "profile",
  initialState: state,
  reducers: {
    openPopup(state) {
      state.profile.isOpen = true;
      console.log("open", state.profile.isOpen);
    },
    closePopup(state) {
      state.profile.isOpen = false;
      console.log(" close", state.profile.isOpen);
    },
  },
});

export const { openPopup, closePopup } = profileSlice.actions;
export default profileSlice.reducer;
