import React, { useEffect, useRef, useState } from "react";
import inst from "./Instagram.module.css";
import { Route, Routes, useParams } from "react-router-dom";
import Main from "./components/Main/Main";
import Search from "./components/Search/Search";
import AddPost from "./components/AddPost/AddPost";
import Reels from "./components/Reels/Reels";
import Profile from "./components/Profile/Profile";
import Account from "./components/Account/Account";
import BottomLineInst from "./BottomLineInst/BottomLineInst";

import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doStoryBook, params } from "../../../BusinessLogic/Redux/PhoneSlice";
import Ribbon from "./components/Account/components/RibbonComponent/components/Ribbon/Ribbon";
import RibbonComponent from "./components/Account/components/RibbonComponent/RibbonComponent";
import SavePosts from "./components/Profile/components/TopLineProfile/components/PopUp/components/SavePosts/SavePosts";
import AddDescribePost from "./components/AddPost/components/СhoicePhoto/AddDescribePost/AddDescribePost";
import OneStory from "./components/Main/MainContent/Stories/WrapStories/OneStory/OneStory";
import Desktop from "./components/Desktop/Desktop";

function MyComponent() {
  // const dispatch = useDispatch();
  // const location = useLocation();
  // dispatch(params(location.pathname));
  // console.log("location.pathname : ", location.pathname);
  // return location.pathname;
}

const Instagram = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(params(location.pathname));
  });
  return (
    <div className={inst.inst}>
      <MyComponent />
      <Routes>
        <Route
          className={inst.route}
          path="/desktop"
          element={<Desktop />}></Route>
        <Route className={inst.route} path="/" element={<Main />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/addPost" element={<AddPost />}></Route>
        <Route path="/reels" element={<Reels />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/ribbonComponent" element={<RibbonComponent />}></Route>
        <Route path="/savePosts" element={<SavePosts />}></Route>
        <Route path="/addDescribePost" element={<AddDescribePost />}></Route>
        <Route path="/oneStory" element={<OneStory />}></Route>
      </Routes>
      <BottomLineInst />
    </div>
  );
};

export default Instagram;
