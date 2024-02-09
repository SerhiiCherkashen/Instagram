// Popup.js
import React from "react";
import saveP from "./SavePosts.module.css";
import { useSelector, useDispatch } from "react-redux";
import TopLineSavePosts from "./components/TopLineSavePosts/TopLineSavePosts";
import ContentSavePosts from "./components/ContentSavePosts/ContentSavePosts";

const SavePosts = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.profileReducer.main);

  return (
    <div className={saveP.saveP}>
      <TopLineSavePosts />
      <ContentSavePosts />
    </div>
  );
};

export default SavePosts;
