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
  // console.log("Account :  ", asd);
  return (
    <div className={account.account}>
      <TopLineProfile account={currentAccount} />
      <DataProfile account={currentAccount} />
      <ContentProfile currentAccount={currentAccount} />
    </div>
  );
};

export default Account;
