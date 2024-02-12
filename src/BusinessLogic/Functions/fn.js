export const fn = (state) => {
  let countAllPosts = 0; // 20
  let countAccounts = state.stateAccounts.accounts.length; // 3
  if (countAccounts > 0) {
    for (let y = 0; y < countAccounts; y++) {
      countAllPosts += state.stateAccounts.accounts[y].posts.length;
    }
  }

  let n = true;
  let accountIndex = 111;
  let postIndex = 222;

  let randomNumber = (untilWhat) => {
    return Math.round(Math.random() * untilWhat);
  };

  while (n === true) {
    if (countAccounts > 0) {
      accountIndex = randomNumber(state.stateAccounts.accounts.length - 1);
    }
    if (state.stateAccounts.accounts[accountIndex].posts.length > 0) {
      postIndex = randomNumber(
        state.stateAccounts.accounts[accountIndex].posts.length - 1
      );
    } else {
      postIndex = -1;
    }

    let result = state.array.findIndex((element) => {
      let arrayAccountIndex = state.stateAccounts.accounts.findIndex((el) => {
        return el.id === element.accountId;
      });
      let arrayPostIndex = state.stateAccounts.accounts[
        arrayAccountIndex
      ].posts.findIndex((el) => {
        return el.id === element.postId;
      });

      // console.log(
      //   "Fn findIndex arrayAccountIndex  ",
      //   arrayAccountIndex,
      //   "---",
      //   accountIndex
      // );
      // console.log(
      //   "Fn findIndex arrayPostIndex  ",
      //   arrayPostIndex,
      //   "---",
      //   postIndex
      // );console.log("Fn findIndex element  ", element);

      return arrayAccountIndex === accountIndex && arrayPostIndex === postIndex;
    });
    if (result === -1) {
      n = false;
    }
    if (state.array.length === countAllPosts) {
      n = false;
      accountIndex = "The End";
    }
  }

  return {
    accountIndex,
    postIndex,
  };
};
