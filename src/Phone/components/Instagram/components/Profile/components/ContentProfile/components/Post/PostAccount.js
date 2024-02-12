import React from "react";
import postAc from "./PostAccount.module.css";

const PostAccount = (props) => {
  const image = props.image;
  return (
    <div className={postAc.postAc}>
      <img src={`${image}`} alt={"..."} />
    </div>
  );
};

export default PostAccount;
