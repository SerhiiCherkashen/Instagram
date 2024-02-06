import React from "react";
import posts from "./Posts.module.css";
import OnePost from "./OnePost/OnePost";
import { useSelector } from "react-redux";

const Posts = () => {
  const { array } = useSelector((state) => state.phoneReducer);
  const { myAccount } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  return (
    <div className={posts.posts}>
      {array.map((element, index) => {
        return <OnePost name={element.name} image={element.image} />;
      })}
      {/* <h1>Posts 1</h1>
      <OnePost name={myAccount.name} img={myAccount.profilePhoto} />
      <h1>Posts 2 </h1>
      <OnePost />
      <h1>Posts 3</h1>
      <OnePost /> */}
      {/* <OnePost /> */}
    </div>
  );
};

export default Posts;
