import React, { useEffect } from "react";
import posts from "./Posts.module.css";
import OnePost from "./OnePost/OnePost";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFirstRender,
  scroll,
} from "../../../../../../../BusinessLogic/Redux/PhoneSlice";

const Posts = () => {
  const dispatch = useDispatch();
  // const { array, main } = useSelector((state) => state.postReducer);
  const { array, main } = useSelector((state) => state.phoneReducer);
  const { myAccount } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  useEffect(() => {});

  return (
    <div className={posts.posts}>
      {array.map((element, index) => {
        // console.log("Posts   element : ", element);
        // /key={Date.now()}
        return (
          <div key={index + Date.now()}>
            <OnePost element={element} />;
          </div>
        );
      })}
      <h1>The End !!!</h1>
    </div>
  );
};

export default Posts;
