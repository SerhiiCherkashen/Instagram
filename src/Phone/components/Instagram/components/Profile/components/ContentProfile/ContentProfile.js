import React from "react";
import contentPr from "./ContentProfile.module.css";
import PostAccount from "./components/Post/PostAccount";
import { Link } from "react-router-dom";
import OnePost from "../../../Main/MainContent/Posts/OnePost/OnePost";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentAccount } from "../../../../../../../BusinessLogic/Redux/PhoneSlice";
import { stateAccounts } from "../../../../../../../BusinessLogic/State/stateAccounts";

const ContentProfile = (props) => {
  const dispatch = useDispatch();
  const { stateAccounts } = useSelector((state) => state.phoneReducer);
  const currentAccount = props.currentAccount;
  const indexMyAccount = stateAccounts.accounts.findIndex((element) => {
    return element.id === stateAccounts.myId;
  });
  return (
    <>
      {currentAccount.id === stateAccounts.accounts[indexMyAccount].id ? (
        <div className={contentPr.contentPr}>
          {currentAccount.posts.map((element, index) => {
            return (
              <div
                onClick={() =>
                  dispatch(
                    changeCurrentAccount(
                      stateAccounts.accounts[indexMyAccount].id
                    )
                  )
                }
                key={index + new Date()}>
                <Link to="/ribbonComponent">
                  <PostAccount image={element.image} />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={contentPr.contentPr}>
          {currentAccount.posts.map((element, index) => {
            let asd;
            if (element.status === "video") {
              asd = element.poster;
            } else {
              asd = element.image;
            }
            return (
              <div key={index + new Date()}>
                <Link to="/ribbonComponent">
                  <PostAccount image={asd} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
      {/* </>
      )} */}
    </>
  );
};

export default ContentProfile;

// <div key={index + new Date()}>
//   <Link to="/ribbonComponent">
//     <OnePost element={element} />;
//   </Link>
// </div>
// console.log("ContentProfile :  ", Object.keys(element));
// console.log("ContentProfile :  ", Object.keys(element));
// console.log("ContentProfile :  ", element.image);
// let element2 = {
//   accountId: currentAccount.id,
//   postId: currentAccount.posts[index].id,
// };
