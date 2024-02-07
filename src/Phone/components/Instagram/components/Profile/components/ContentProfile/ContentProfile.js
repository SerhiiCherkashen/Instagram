import React from "react";
import contentPr from "./ContentProfile.module.css";
import PostAccount from "./components/Post/PostAccount";

const ContentProfile = (props) => {
  const account = props.account;
  return (
    <div className={contentPr.contentPr}>
      {account.posts.map((element) => {
        // console.log("ContentProfile :  ", Object.keys(element));
        // console.log("ContentProfile :  ", element.image);
        return <PostAccount image={element.image} />;
      })}
    </div>
  );
};

export default ContentProfile;
