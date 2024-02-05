import { createSlice } from "@reduxjs/toolkit";

const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    name: "Insta 2.0",
    lastScroll: 0,
    isScrollingUp: true,
    count: 0,
  },
  reducers: {
    setScrollDirection: (state, action) => {
      let currentScroll = action.payload;

      if (state.lastScroll > currentScroll) {
        // console.log("true");
        state.isScrollingUp = true;
      } else {
        // console.log("false");
        state.isScrollingUp = false;
      }
      state.lastScroll = currentScroll;
    },
    setCount: (state) => {
      state.count += 1;
      // console.log(state.count);
    },
  },
});

export const { setScrollDirection, setCount } = phoneSlice.actions;
export default phoneSlice.reducer;
