import { createSlice } from "@reduxjs/toolkit";
import { stateRedux } from "../State/stateRedux";
import { fn } from "../Functions/fn";
import { stateConst } from "../State/StateConst";

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
    },
    scroll: (state) => {
      state.countPX += 700;

      for (let i = 0; i < 3; i++) {
        let random = fn(state);
        // console.log("Scroll   result fn() : ", random);
        if (random.accountIndex === "The End") {
          return;
        } else {
          state.array.push(
            {
              accountId: state.stateAccounts.accounts[random.accountIndex].id,
              postId:
                state.stateAccounts.accounts[random.accountIndex].posts[
                  random.postIndex
                ].id,
            }
            // state.stateAccounts.accounts[random.accountIndex].posts[
            //   random.postIndex
            // ]
            // {
            //
            //
            //
            // accountIndex: random.accountIndex,
            // postIndex: random.postIndex,
            // id: state.stateAccounts.accounts[random.accountIndex].id,
            // name: state.stateAccounts.accounts[random.accountIndex].name,
            // profilePhoto:
            //   state.stateAccounts.accounts[random.accountIndex].profilePhoto,
            // post: state.stateAccounts.accounts[random.accountIndex].posts[
            //   random.postIndex
            // ],
            //-----------------------------------------
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
            // }
          );
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
      const accountIndex = action.payload.accountIndex;
      const postIndex = action.payload.postIndex;
      console.log("like", Object.keys(action.payload)); //
      console.log("like", action.payload.accountIndex); //
      console.log("like", action.payload.accountIndex); //
      console.log("like", accountIndex); //
      console.log("like", postIndex); //
      // state.stateAccounts.accounts[accountsIndex].posts[postIndex].likesss++;
      let index = state.stateAccounts.accounts[accountIndex].posts[
        postIndex
      ].likes.findIndex((element) => {
        return element === state.stateAccounts.myId;
      });
      console.log("Like Index : ", index);
      if (index === -1) {
        state.stateAccounts.accounts[accountIndex].posts[postIndex].likes.push(
          state.stateAccounts.myId
        );
      } else {
        state.stateAccounts.accounts[accountIndex].posts[
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
      const accountId = action.payload.accountId;
      const postId = action.payload.postId;

      const indexMyAccount = state.stateAccounts.accounts.findIndex(
        (element) => {
          return element.id === state.stateAccounts.myId;
        }
      );
      // console.log("SAVE     accountId/postId ", accountId, postId);

      let saveTF = state.stateAccounts.accounts[
        indexMyAccount
      ].savePosts.findIndex((element) => {
        // console.log(
        //   "SAVE --- element.postId === postId",
        //   element.postId,
        //   ",===,",
        //   postId
        // );
        return element.postId === postId;
      });

      if (saveTF === -1) {
        console.log("SAVE    PUSH ");
        state.stateAccounts.accounts[indexMyAccount].savePosts.push({
          accountId: accountId,
          postId: postId,
        });
      } else {
        console.log("SAVE --- ");
        state.stateAccounts.accounts[indexMyAccount].savePosts.splice(
          saveTF,
          1
        );
      }
    },
    changeCurrentAccount: (state, action) => {
      const id = action.payload;
      // console.log("Change action.payload--- id : ", action.payload); // ID --- True
      let index = state.stateAccounts.accounts.findIndex((element) => {
        return element.id === id;
      });
      state.stateAccounts.currentAccount = state.stateAccounts.accounts[index];
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
    mutedSwitch: (state, action) => {
      let index = state.testStateVideo.findIndex((iter) => {
        return iter.id === action.payload;
      });
      let indexNow = state.testStateVideo.findIndex((iter) => {
        return iter.muted === false;
      });

      state.testStateVideo.forEach((el) => {
        el.muted = true;
      });
      if (indexNow !== index) {
        state.testStateVideo[index].muted = false;
      } else {
        state.testStateVideo[index].muted = true;
      }
      console.log("song", action.payload, index, indexNow);
    },
    mutedSwitchPost: (state, action) => {
      let account;
      const accountIndex = action.payload.accountIndex;
      const postIndex = action.payload.postIndex;

      state.stateAccounts.accounts[accountIndex].posts[postIndex].muted =
        !state.stateAccounts.accounts[accountIndex].posts[postIndex].muted;

      console.log("mutedSwitchPost song  : ", accountIndex, postIndex);

      // account.posts.forEach((el) => {
      //   el.muted = true;
      // });
      // if (indexNow !== index) {
      //   account[index].muted = false;
      // } else {
      //   account[index].muted = true;
      // }
    },
    getPositionOnScroll: (state, action) => {
      // console.log("aaa");
      // let id = action.payload.id;
      // let top = action.payload.top;
      // let bottom = action.payload.bottom;
      // let result = Object.keys(action.payload);
      // if (
      //   typeof result !== "object" ||
      //   result === null ||
      //   result === undefined
      // ) {
      //   result = "HyI";
      // }
      // console.log("aaa", action.payload);
      // console.log("aaa", action.payload.id, result);
      // console.log("aaa", id, top, bottom);
      // console.log("aaa", action.payload.id);
      // if(  )
    },
    writeReelsScroll: (state, action) => {
      state.reelsScroll = action.payload;
      console.log("hyi  state.reelsScroll  : ", state.reelsScroll);
    },
    changeMutedOnScroll: (state, action) => {
      console.log("changeMutedOnScroll :  ", action.payload.id);
      // let index = state.testStateVideo.findIndex((iter) => {
      //   return iter.id === action.payload;
      // });
      // let indexNow = state.testStateVideo.findIndex((iter) => {
      //   return iter.muted === false;
      // });
      // state.testStateVideo.forEach((el) => {
      //   el.muted = true;
      // });
      // if (indexNow !== index) {
      //   state.testStateVideo[index].muted = false;
      // } else {
      //   state.testStateVideo[index].muted = true;
      // }
    },
    subscribe: (state, action) => {
      const id = action.payload;
      console.log("subscribe - id : ", id);

      const indexAccount = state.stateAccounts.accounts.findIndex((element) => {
        return element.id === id;
      });
      const indexMyAccount = state.stateAccounts.accounts.findIndex(
        (element) => {
          return element.id === state.stateAccounts.myId;
        }
      );
      console.log(
        "subscribe - indexAccount/indexMyAccount : ",
        indexAccount,
        indexMyAccount
      );
      console.log(
        "subscribe My Subscriptions: indexMyAccount.id ",
        state.stateAccounts.accounts[indexMyAccount].id,
        "---",
        state.stateAccounts.accounts[indexMyAccount].mySubscriptions[0],
        state.stateAccounts.accounts[indexMyAccount].mySubscriptions[1],
        state.stateAccounts.accounts[indexMyAccount].mySubscriptions[2],
        state.stateAccounts.accounts[indexMyAccount].mySubscriptions[3],
        state.stateAccounts.accounts[indexMyAccount].mySubscriptions[4],
        state.stateAccounts.accounts[indexMyAccount].mySubscriptions[5],
        state.stateAccounts.accounts[indexMyAccount].mySubscriptions[6],
        state.stateAccounts.accounts[indexMyAccount].mySubscriptions[7]
      );
      console.log(
        "subscribe - mySubscriptions.length : ",
        state.stateAccounts.accounts[indexMyAccount].mySubscriptions.length
      );

      let status = state.stateAccounts.accounts[
        indexMyAccount
      ].mySubscriptions.findIndex((element) => {
        console.log(
          "subscribe : element ",
          element,
          state.stateAccounts.myId,
          id
        );
        return element === id;
      });

      let status2 = state.stateAccounts.accounts[
        indexAccount
      ].myFollowers.findIndex((element) => {
        console.log(
          "subscribe : element ",
          element,
          state.stateAccounts.myId,
          id
        );
        return element === state.stateAccounts.myId;
      });

      console.log("subscribe - status  : ", status, status2);

      if (status === -1) {
        state.stateAccounts.accounts[indexAccount].myFollowers.push(
          state.stateAccounts.myId
        );
        state.stateAccounts.accounts[indexMyAccount].mySubscriptions.push(id);
      } else {
        state.stateAccounts.accounts[indexAccount].myFollowers.splice(
          status2,
          1
        );
        state.stateAccounts.accounts[indexMyAccount].mySubscriptions.splice(
          status,
          1
        );
      }
      // console.log("subscribe : id/status ===", id, status);
      // console.log(
      //   "subscribe : ",
      //   state.stateAccounts.accounts[indexAccount].mySubscriptions.length,
      //   state.stateAccounts.accounts[indexMyAccount].mySubscriptions.length
      // );
    },
    changeAddPhoto: (state, action) => {
      let index = action.payload;
      console.log("ddd");
      state.addSelectedPhoto = stateConst.addPhoto[index].photo;
    },
    addPost: (state, action) => {
      let indexMyAccount = state.stateAccounts.accounts.findIndex((element) => {
        return element.id === state.stateAccounts.myId;
      });
      let objectPost = {
        id: state.stateAccounts.myId + Date.now(),
        image: state.addSelectedPhoto,
        text: "ass",
        likesss: 0,
        likes: [],
        comments: 0,
        save: 0,
      };
      state.stateAccounts.accounts[indexMyAccount].posts.unshift(objectPost);
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
  mutedSwitch,
  mutedSwitchPost,
  getPositionOnScroll,
  writeReelsScroll,
  changeMutedOnScroll,
  subscribe,
  changeAddPhoto,
  addPost,
} = phoneSlice.actions;
export default phoneSlice.reducer;
