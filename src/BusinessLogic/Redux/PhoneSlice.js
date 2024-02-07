import { createSlice } from "@reduxjs/toolkit";
import { stateRedux } from "../State/stateRedux";
import { fn } from "../Functions/fn";

// let fn = (state) => {
//   let n = 0;
//   let accountsIndex = 111;
//   let postIndex = 222;
//   while (n < 1000) {
//     accountsIndex = Math.round(
//       Math.random() * (state.stateAccounts.accounts.length - 1)
//     );
//     postIndex = Math.round(
//       Math.random() *
//         (state.stateAccounts.accounts[accountsIndex].posts.length - 1)
//     );
//     let result = state.array.findIndex(function (element) {
//       return (
//         element.postIndex === postIndex &&
//         element.accountsIndex === accountsIndex
//       );
//     });
//     console.log("accountsIndex 1:  -------", accountsIndex);
//     console.log("postIndex 1:  -------", postIndex);
//     console.log("result 1: ", result);
//     if (result === -1) {
//       n = 1000;
//     }
//     if (n === 999) {
//       accountsIndex = "The End";
//     }
//     n++;

//     console.log(
//       "END round ",
//       n,
//       "----------------------------------------------------------------------------------------------------"
//     );
//   }

//   return {
//     accountsIndex,
//     postIndex,
//   };
// };

const state = stateRedux;
const phoneSlice = createSlice({
  name: "phone",
  initialState: state,
  reducers: {
    setScrollDirection: (state, action) => {
      let currentScroll = action.payload;
      if (state.main.lastScroll > currentScroll) {
        state.main.isScrollingUp = true;
      } else {
        state.main.isScrollingUp = false;
      }
      state.main.lastScroll = currentScroll;
    },
    setCount: (state) => {
      state.main.count += 1;
      // console.log(state.count);
    },
    scroll: (state) => {
      state.countPX += 700;

      for (let i = 0; i < 3; i++) {
        let random = fn(state);
        // console.log("Scroll   result fn() : ", random);
        if (random.accountsIndex === "The End") {
          return;
        } else {
          state.array.push({
            accountsIndex: random.accountsIndex,
            postIndex: random.postIndex,
            id: state.stateAccounts.accounts[random.accountsIndex].id,
            name: state.stateAccounts.accounts[random.accountsIndex].name,
            profilePhoto:
              state.stateAccounts.accounts[random.accountsIndex].profilePhoto,
            post: state.stateAccounts.accounts[random.accountsIndex].posts[
              random.postIndex
            ],
            // likes:
            //   state.stateAccounts.accounts[random.accountsIndex].posts[
            //     random.postIndex
            //   ].likes,

            // likes:
            //   state.stateAccounts.accounts[random.accountsIndex].posts[
            //     random.postIndex
            //   ].likes,
            // image:
            //   state.stateAccounts.accounts[random.accountsIndex].posts[
            //     random.postIndex
            //   ].image,
          });
        }
        console.log("Scroll   state.array.length ", state.array.length);
      }

      // console.log("YES");
    },
    changeFirstRender: (state) => {
      console.log(
        "changeFirstRender : - ---     -----    -------        ---    ------    -----     -------    -----    ----                    ------------"
      );
      state.main.countFirstRender = false;
      // const countAccounts = state.stateAccounts.accounts.length;
      // if (countAccounts > 0) {
      //   for (let y = 0; y < countAccounts; y++) {
      //     state.stateAccounts.countAllPosts +=
      //       state.stateAccounts.accounts[y].posts.length;
      //   }
      // }
      // console.log("countAllPosts Redux: ", state.stateAccounts.countAllPosts);
    },
    like: (state, action) => {
      const accountsIndex = action.payload.accountsIndex;
      const postIndex = action.payload.postIndex;
      console.log("like", accountsIndex);
      console.log("like", postIndex);
      state.stateAccounts.accounts[accountsIndex].posts[postIndex].likesss++;
      // state.stateAccounts.accounts[accountsIndex].posts[postIndex].likes.push(
      //   state.stateAccounts.myAccount.id
      // );

      console.log(
        "likesss",
        state.stateAccounts.accounts[accountsIndex].posts[postIndex].likesss
      );
    },
    changeCurrentAccount: (state, action) => {
      const id = action.payload;
      console.log("Change action.payload--- id : ", action.payload); // ID --- True
      let index = state.stateAccounts.accounts.findIndex((element) => {
        return element.id === id;
      });
      console.log("Change index: ", index);
      state.stateAccounts.currentAccount = state.stateAccounts.accounts[index];
      console.log(
        "Change 1: ",
        Object.keys(state.stateAccounts.accounts[index])
      );
      console.log(
        "Change 2: ",
        Object.keys(state.stateAccounts.currentAccount)
      );
    },
  },
});

export const {
  setScrollDirection,
  setCount,
  scroll,
  changeFirstRender,
  like,
  changeCurrentAccount,
} = phoneSlice.actions;
export default phoneSlice.reducer;
