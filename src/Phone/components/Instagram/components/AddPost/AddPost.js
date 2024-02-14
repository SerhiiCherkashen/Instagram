import React from "react";
import add from "./AddPost.module.css";
import TopLineAdd from "./components/TopLineAdd/TopLineAdd";
import СhoicePhoto from "./components/СhoicePhoto/СhoicePhoto";

const AddPost = () => {
  return (
    <div className={add.add}>
      {/* <h1>AddPost</h1> */}
      <TopLineAdd />
      <СhoicePhoto />
    </div>
  );
};

export default AddPost;
