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
        // console.log("Scroll   state.array.length ", state.array.length);
      }
    },
    changeFirstRender: (state) => {
      // console.log(
      //   "changeFirstRender : - ---     -----    -------        ---    ------    -----     -------    -----    ----                    ------------"
      // );
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
      console.log("like CLICk"); //
      const accountsIndex = action.payload.accountsIndex;
      const postIndex = action.payload.postIndex;
      console.log("like", Object.keys(action.payload)); //
      console.log("like", action.payload.accountsIndex); //
      console.log("like", action.payload.accountIndex); //
      console.log("like", accountsIndex); //
      console.log("like", postIndex); //
      // state.stateAccounts.accounts[accountsIndex].posts[postIndex].likesss++;
      let index = state.stateAccounts.accounts[accountsIndex].posts[
        postIndex
      ].likes.findIndex((element) => {
        return element === state.stateAccounts.myAccount.id;
      });
      console.log("Like Index : ", index);
      if (index === -1) {
        state.stateAccounts.accounts[accountsIndex].posts[postIndex].likes.push(
          state.stateAccounts.myAccount.id
        );
      } else {
        state.stateAccounts.accounts[accountsIndex].posts[
          postIndex
        ].likes.splice(index, 1);
      }
    },
    likeDoubleClick: (state) => {
      state.main.stateLikeDoubleClick = !state.main.stateLikeDoubleClick;
      console.log("likeDoubleClick");
      console.log(
        "state.stateLikeDoubleClick : ",
        state.main.stateLikeDoubleClick
      );
    },
    save: (state, action) => {
      console.log(action.payload);
      console.log(action.payload.accountId); // index in accounts;

      const accountIndex = action.payload.accountIndex;
      const postIndex = action.payload.postIndex;

      const accountId = state.accounts[accountIndex].id;
      const postId = state.accounts[accountIndex].posts[postId].id;
      // let postIndex;
      // let accountIndex = state.stateAccounts.myAccount.savePosts.findIndex(
      //   (element) => {
      //     return element.accountId === action.payload.accountId;
      //   }
      // );
      // postIndex = state.stateAccounts.myAccount.savePosts.findIndex(
      //   (element) => {
      //     return element.postId === action.payload.postId;
      //   }
      // );

      let saveTF = state.stateAccounts.myAccount.savePosts.findIndex(
        (element) => {
          return element.postId === postId;
        }
      );
      if (saveTF === -1) {
        console.log(
          "save 1:  === -1 "
          // state.stateAccounts.accounts[accountIndex].posts[postIndex]
        );
        state.stateAccounts.myAccount.savePosts.push({
          accountId: state.stateAccounts.accounts[accountIndex],
          postId: state.stateAccounts.accounts[postIndex],
        });
      } else {
        // console.log(
        //   "save :   !== -1 ",
        //   accountIndex,
        //   Object.keys(state.stateAccounts)
        //   // state.stateAccounts.accounts[accountIndex].posts[postIndex]
        // );
        // let indexSavePosts = state.stateAccounts.myAccount.savePosts.findIndex(
        //   (element) => {
        //     return (
        //       element.postId ===
        //       state.stateAccounts.accounts[accountIndex].posts[postIndex]
        //     );
        //   }
        // );
        state.stateAccounts.myAccount.savePosts.splice(saveTF, 1);
      }

      // console.log("SAVE");
      // console.log("SAVE  : ", state.stateAccounts.myAccount.savePosts.length);
    },
    changeCurrentAccount: (state, action) => {
      const id = action.payload;
      // console.log("Change action.payload--- id : ", action.payload); // ID --- True
      let index = state.stateAccounts.accounts.findIndex((element) => {
        return element.id === id;
      });
      // console.log("Change index: ", index);
      state.stateAccounts.currentAccount = state.stateAccounts.accounts[index];
      // console.log(
      //   "Change 1: ",
      //   Object.keys(state.stateAccounts.accounts[index])
      // );
      // console.log(
      //   "Change 2: ",
      //   Object.keys(state.stateAccounts.currentAccount)
      // );
    },
    params: (state, action) => {
      const url = action.payload;
      state.urlParams.push(url);
      // console.log("Params   dispatch params : url --- ", url); //
      // console.log(                                              //
      //   "Params   state.urlParams.length : --- ",
      //   state.urlParams.length
      // );
      let index = state.urlParams.length - 2;
      state.urlBack = state.urlParams[index];
      // console.log(state.urlParams[0]);
      // console.log(state.urlParams[1]);
      // console.log(state.urlParams[2]);
      // console.log(state.urlParams[3]);
      // console.log(state.urlParams[4]);
      // console.log(state.urlParams[5]);
    },
    back: (state) => {
      state.pressBack = true;
      if (state.urlParams.length > 2) {
        let a = state.urlParams.length - 2;
        let result = state.urlParams.splice(a, 2);
        state.urlBack = state.urlParams.splice(a, 2);
        // console.log("Back  : ", a + 1, a, result); //
      }
    },
    changeColor: (state) => {
      state.color = !state.color;
    },
  },
});

export const {
  setScrollDirection,
  setCount,
  scroll,
  changeFirstRender,
  like,
  likeDoubleClick,
  save,
  changeCurrentAccount,
  params,
  back,
  changeColor,
} = phoneSlice.actions;
export default phoneSlice.reducer;
