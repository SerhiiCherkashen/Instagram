import React from "react";
import postAc from "./PostAccount.module.css";

const PostAccount = (props) => {
  const image = props.image;
  // console.log("PostAccount image :  ", image);
  return (
    <div className={postAc.postAc}>
      {/* <h1>PostAccount</h1> */}

      <img src={`${image}`} />
      {/* <h1>A</h1> */}
    </div>
  );
};

export default PostAccount;
