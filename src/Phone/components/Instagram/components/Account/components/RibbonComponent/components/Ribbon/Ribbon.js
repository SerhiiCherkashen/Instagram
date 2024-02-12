import React from "react";
import ribbon from "./Ribbon.module.css";
import { useSelector } from "react-redux";
import OnePost from "../../../../../Main/MainContent/Posts/OnePost/OnePost";

const Ribbon = () => {
  const { accounts, currentAccount } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  // let accountsIndex = accounts.findIndex((item) => {
  //   return item.id === currentAccount.id;
  // });
  // console.log("Ribbon  accountIndex ", accountsIndex);

  return (
    <div className={ribbon.ribbon}>
      {currentAccount.posts.map((el, index) => {
        let element = {
          accountId: currentAccount.id,
          postId: el.id,
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
