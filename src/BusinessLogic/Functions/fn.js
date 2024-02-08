export const fn = (state) => {
  let countAllPosts = 0;
  let countAccounts = state.stateAccounts.accounts.length;
  if (countAccounts > 0) {
    for (let y = 0; y < countAccounts; y++) {
      countAllPosts += state.stateAccounts.accounts[y].posts.length;
      // console.log("Fn for countAllPosts  ", countAllPosts);
    }
  }
  // console.log("Fn countAllPosts IF :  ", countAllPosts);

  let n = true;
  let accountsIndex = 111;
  let postIndex = 222;

  while (n === true) {
    if (state.stateAccounts.accounts.length > 0) {
      accountsIndex = Math.round(
        Math.random() * (state.stateAccounts.accounts.length - 1)
      );
    }
    if (state.stateAccounts.accounts[accountsIndex].posts.length > 0) {
      postIndex = Math.round(
        Math.random() *
          (state.stateAccounts.accounts[accountsIndex].posts.length - 1)
      );
    } else {
      postIndex = -1;
    }
    let result = state.array.findIndex(function (element) {
      return (
        element.postIndex === postIndex &&
        element.accountsIndex === accountsIndex
      );
    });
    if (result === -1) {
      n = false;
    }
    // if (n === 9) {
    //   accountsIndex = "The End";
    // }
    if (state.array.length === countAllPosts) {
      n = false;
      accountsIndex = "The End";
    }
    // n++;

    // console.log(
    //   "END round  ",
    //   n,
    //   "----------------------------------------------------------------------------------------------------"
    // );
  }

  return {
    accountsIndex,
    postIndex,
  };
};
