import React from "react";
import contentSP from "./ContentSavePosts.module.css";
import { changeCurrentAccount } from "../../../../../../../../../../../../../BusinessLogic/Redux/PhoneSlice";
import OnePost from "../../../../../../../../../Main/MainContent/Posts/OnePost/OnePost";
import { useDispatch, useSelector } from "react-redux";
import OnePostSaveProfile from "./OnePostSaveProfile/OnePostSaveProfile";

const ContentSavePosts = (props) => {
  const dispatch = useDispatch();
  const { myAccount, accounts } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );

  return (
    <div>
      <h1>ContentSavePosts</h1>
      <div className={contentSP.contentSP}>
        {myAccount.savePosts.map((item, index) => {
          let postIndex;
          let accountIndex = accounts.findIndex((iter) => {
            return iter.id === item.accountId;
          });
          if (accountIndex !== -1) {
            postIndex = accounts[accountIndex].posts.findIndex((iter) => {
              return iter.id === item.postId;
            });
          }
          if (
            accountIndex !== -1 &&
            postIndex !== -1 &&
            accountIndex !== "undefined" &&
            postIndex !== "undefined"
          ) {
            let element = {
              accountIndex: accountIndex,
              postIndex: postIndex,
            };
            return (
              <div key={index + Date.now()}>
                <OnePostSaveProfile element={element} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ContentSavePosts;
{
  /* {changeCurrentAccount.posts.map((el, index) => {
          let element = {
            // accountsIndex: accountsIndex,
            // postIndex: index,
          };
          return (
            <div key={index + Date.now()}>
              <OnePost element={element} />;
            </div>
          );
        })} */
}
