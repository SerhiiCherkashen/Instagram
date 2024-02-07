import React from "react";
import account from "./Account.module.css";
import TopLineProfile from "../Profile/components/TopLineProfile/TopLineProfile";
import DataProfile from "../Profile/components/DataProfile/DataProfile";
import ContentProfile from "../Profile/components/ContentProfile/ContentProfile";
import { useSelector } from "react-redux";

const Account = () => {
  const { currentAccount, myAccount, accounts } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  // const { stateAccount } = useSelector((state) => state.phoneReducer);
  // console.log("Account :  ", stateAccount.currentAccount.id);
  // console.log("Account :  ", array.length);
  // console.log("Account :  ", asd);
  // console.log(
  //   "Account    Object.keys(currentAccount) :  ",
  //   Object.keys(currentAccount)
  // );
  // console.log("Account    currentAccount.id :  ", currentAccount.id);
  return (
    <div className={account.account}>
      <h1>Account</h1>
      <TopLineProfile account={currentAccount} />
      <DataProfile account={currentAccount} />
      <ContentProfile account={currentAccount} />
    </div>
  );
};

export default Account;
