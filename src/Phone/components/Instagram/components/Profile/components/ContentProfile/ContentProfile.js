import React from "react";
import contentPr from "./ContentProfile.module.css";
import PostAccount from "./components/Post/PostAccount";
import { Link } from "react-router-dom";

const ContentProfile = (props) => {
  const account = props.account;
  return (
    <>
      {account.id === "_serhii_007_" ? (
        <div className={contentPr.contentPr}>
          {account.posts.map((element, index) => {
            // console.log("ContentProfile :  ", Object.keys(element));
            // console.log("ContentProfile :  ", element.image);
            return (
              <div key={index + new Date()}>
                <PostAccount image={element.image} />;
              </div>
            );
          })}
        </div>
      ) : (
        <div className={contentPr.contentPr}>
          {account.posts.map((element, index) => {
            // console.log("ContentProfile :  ", Object.keys(element));
            // console.log("ContentProfile :  ", element.image);
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
    </>
  );
};

export default ContentProfile;
