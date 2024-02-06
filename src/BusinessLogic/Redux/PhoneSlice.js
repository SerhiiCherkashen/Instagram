import { createSlice } from "@reduxjs/toolkit";
import { stateRedux } from "../State/stateRedux";

let fn = (state) => {
  let n = 0;
  let accountsIndex = 111;
  let postIndex = 222;
  while (n < 1000) {
    accountsIndex = Math.round(
      Math.random() * (state.stateAccounts.accounts.length - 1)
    );
    postIndex = Math.round(
      Math.random() *
        (state.stateAccounts.accounts[accountsIndex].posts.length - 1)
    );
    let result = state.array.findIndex(function (element) {
      return (
        element.postIndex === postIndex &&
        element.accountsIndex === accountsIndex
      );
    });
    console.log("accountsIndex 1:  -------", accountsIndex);
    console.log("postIndex 1:  -------", postIndex);
    console.log("result 1: ", result);
    if (result === -1) {
      n = 1000;
    }
    if (n === 999) {
      accountsIndex = "The End";
    }
    n++;

    console.log(
      "END round ",
      n,
      "----------------------------------------------------------------------------------------------------"
    );
  }

  return {
    accountsIndex,
    postIndex,
  };
};

const state = stateRedux;
const phoneSlice = createSlice({
  name: "phone",
  initialState: state,
  reducers: {
    setScrollDirection: (state, action) => {
      let currentScroll = action.payload;

      if (state.main.lastScroll > currentScroll) {
        // console.log("true");
        state.main.isScrollingUp = true;
      } else {
        // console.log("false");
        state.main.isScrollingUp = false;
      }
      state.main.lastScroll = currentScroll;
    },
    setCount: (state) => {
      state.main.count += 1;
      // console.log(state.count);
    },
    scroll: (state) => {
      state.countPX += 1000;

      for (let i = 0; i < 3; i++) {
        let random = fn(state);
        console.log("C : ", random);
        if (random.accountsIndex === "The End") {
          state.array.push({
            accountsIndex: random.accountsIndex,
            postIndex: random.postIndex,
            name: "The End",
            // name: state.stateAccounts.accounts[random.accountsIndex].name,
            // image:
            //   state.stateAccounts.accounts[random.accountsIndex].posts[
            //     random.postIndex
            //   ].image,
          });
        } else {
          state.array.push({
            accountsIndex: random.accountsIndex,
            postIndex: random.postIndex,
            name: state.stateAccounts.accounts[random.accountsIndex].name,
            image:
              state.stateAccounts.accounts[random.accountsIndex].posts[
                random.postIndex
              ].image,
          });
        }
        console.log("state.array.length ", state.array.length);
        console.log("state.array ", state.array[5]);
      }

      console.log("YES");
    },
  },
});

export const { setScrollDirection, setCount, scroll } = phoneSlice.actions;
export default phoneSlice.reducer;
// let accountsIndex = Math.round(
//   Math.random() * (state.stateAccounts.accounts.length - 1)
// );
// console.log("accountsIndex :  ", accountsIndex);

// let postIndex = Math.round(
//   Math.random() *
//     (state.stateAccounts.accounts[accountsIndex].posts.length - 1)
// );
// console.log("postIndex :  ", postIndex);
// fn(state).accountsIndex;
//
// state.array.push({
//   name: "new asd",
//   image:
//     "https://www.essentiallysports.com/stories/soccer-news-football-a-look-into-lionel-messis-luxury-car-collection-2021/assets/1.jpeg",
// });
// state.array.push({
//   name: "new qwerty",
//   image:
//     "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2022/06/02/b7d2870a-3262-4ba4-84b5-1f32fc9c8491_627715a1.jpg",
// });
// state.array.push({
//   name: "new fff",
//   image:
//     "https://lh6.googleusercontent.com/L63KWkIwBJRp6FrFsflbtiypc8OyomP7P0MjVShdjWw6nhok65X0fN-hBQVGvYHaIb2kVo7D9i--Le7tSO4hGHkkJ6eDiv7ddBPhAHd0NlIORVsYuR_Hn2SNnWoOzBbp6B8f0zOD",
// });
