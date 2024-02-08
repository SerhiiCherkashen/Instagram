import React from "react";
import ribbon from "./Ribbon.module.css";
import { useSelector } from "react-redux";
import OnePost from "../../../../../Main/MainContent/Posts/OnePost/OnePost";

const Ribbon = () => {
  const { accounts, currentAccount } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  let accountsIndex = accounts.findIndex((item) => {
    return item.id === currentAccount.id;
  });
  console.log("Ribbon  accountIndex ", accountsIndex);
  // console.log("Ribbon  currentAccount.name ", currentAccount.name);
  // console.log(
  //   "Ribbon   Object.keys(currentAccount) ",
  //   Object.keys(currentAccount)
  // );
  // console.log(
  //   "Ribbon  currentAccount.posts[0].likes ",
  //   currentAccount.posts[0].likes
  // );
  return (
    <div className={ribbon.ribbon}>
      {currentAccount.posts.map((el, index) => {
        let element = {
          accountsIndex: accountsIndex,
          postIndex: index,
        };
        return (
          <div key={index + Date.now()}>
            <OnePost element={element} />;
          </div>
        );
      })}
    </div>
  );
};

export default Ribbon;
