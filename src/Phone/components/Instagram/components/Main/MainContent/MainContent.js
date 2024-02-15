import React, { useEffect, useRef, useState } from "react";
import mainContent from "./MainContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  scroll,
  setCount,
  setScrollDirection,
} from "../../../../../../BusinessLogic/Redux/PhoneSlice";
import Posts from "./Posts/Posts";
import TopLineInst from "./TopLineInst/TopLineInst";
import Stories from "./Stories/Stories";

const MainContent = () => {
  const dispatch = useDispatch();
  const { name, isScrollingUp, count, countPX } = useSelector(
    (state) => state.phoneReducer
  );

  const handleScroll = (e) => {
    let currentScroll = e.target.scrollTop;
    // console.log(" scroll.target : ", e.target.scrollTop);
    if (currentScroll > countPX) {
      dispatch(scroll());
    }
    dispatch(setScrollDirection(currentScroll));
  };

  return (
    <div
      id={"elem"}
      onScroll={(e) => handleScroll(e)}
      className={mainContent.mainContent}>
      <TopLineInst />
      <Stories />
      <Posts />
    </div>
  );
};

export default MainContent;
