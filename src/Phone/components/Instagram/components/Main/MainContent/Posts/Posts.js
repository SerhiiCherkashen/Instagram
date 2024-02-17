import React, { useEffect } from "react";
import posts from "./Posts.module.css";
import OnePost from "./OnePost/OnePost";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFirstRender,
  mutedSwitch,
  scroll,
} from "../../../../../../../BusinessLogic/Redux/PhoneSlice";
import { stateConst } from "../../../../../../../BusinessLogic/State/StateConst";

const Posts = () => {
  const dispatch = useDispatch();
  const { array, main } = useSelector((state) => state.phoneReducer);
  const { myAccount } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  useEffect(() => {});

  return (
    <div className={posts.posts}>
      <></>
      {array.map((element, index) => {
        return (
          <div className={posts.wrapOnePost} key={index + Date.now()}>
            <OnePost element={element} />
          </div>
        );
      })}
      <h1>The End !!!</h1>
    </div>
  );
};

export default Posts;
