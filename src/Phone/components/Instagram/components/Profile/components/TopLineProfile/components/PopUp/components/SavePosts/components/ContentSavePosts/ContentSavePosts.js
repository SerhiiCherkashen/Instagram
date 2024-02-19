import React from "react";
import contentSP from "./ContentSavePosts.module.css";
import { changeCurrentAccount } from "../../../../../../../../../../../../../BusinessLogic/Redux/PhoneSlice";
import { useDispatch, useSelector } from "react-redux";
import OnePostSaveProfile from "./OnePostSaveProfile/OnePostSaveProfile";
import OnePost from "../../../../../../../../../Main/MainContent/Posts/OnePost/OnePost";

const ContentSavePosts = (props) => {
  const dispatch = useDispatch();
  const { stateAccounts } = useSelector((state) => state.phoneReducer);

  let indexMyAccount = stateAccounts.accounts.findIndex((element) => {
    return element.id === stateAccounts.myId;
  });

  return (
    <div>
      <div className={contentSP.contentSP}>
        {stateAccounts.accounts[indexMyAccount].savePosts.map((item, index) => {
          let element = {
            accountId: item.accountId,
            postId: item.postId,
          };
          return (
            <div key={index + Date.now()}>
              <OnePost element={element} />
            </div>
          );
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
