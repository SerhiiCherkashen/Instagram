// import { createSlice } from "@reduxjs/toolkit";
// import { stateRedux } from "../State/stateRedux";

// const state = stateRedux;
// const postSlice = createSlice({
//   name: "post",
//   initialState: state,
//   reducers: {
//     like: (state, action) => {
//       const accountsIndex = action.payload.accountsIndex;
//       const postIndex = action.payload.postIndex;
//       console.log("like", accountsIndex);
//       console.log("like", postIndex);

//       state.stateAccounts.accounts[accountsIndex].posts[postIndex].likesss++;
//       // state.stateAccounts.accounts[accountsIndex].posts[postIndex].likesss += 1;
//       // state.stateAccounts.accounts[accountsIndex].posts[postIndex].likes.push(
//       //   state.stateAccounts.myAccount.id
//       // );
//     },
//   },
// });

// export const { like } = postSlice.actions;
// export default postSlice.reducer;
