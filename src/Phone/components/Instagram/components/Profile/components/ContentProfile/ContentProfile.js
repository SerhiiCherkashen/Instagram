import React from "react";
import contentPr from "./ContentProfile.module.css";
import PostAccount from "./components/Post/PostAccount";
import { Link } from "react-router-dom";
import OnePost from "../../../Main/MainContent/Posts/OnePost/OnePost";

const ContentProfile = (props) => {
  const currentAccount = props.currentAccount;

  console.log("ContentProfile :  ", currentAccount.posts.length);
  return (
    <>
      {/* {currentAccount.posts.length > 0 && (
        <> */}
      {currentAccount.id === "_serhii_007_" ? (
        <div className={contentPr.contentPr}>
          {currentAccount.posts.map((element, index) => {
            return (
              <div key={index + new Date()}>
                <PostAccount image={element.image} />;
              </div>
            );
          })}
        </div>
      ) : (
        <div className={contentPr.contentPr}>
          {currentAccount.posts.map((element, index) => {
            return (
              <div key={index + new Date()}>
                <Link to="/ribbonComponent">
                  <PostAccount image={element.image} />;
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
