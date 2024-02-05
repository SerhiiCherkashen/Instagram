import React, { useEffect, useRef, useState } from "react";
import mainContent from "./MainContent.module.css";
import TopLineInst from "../TopLineInst/TopLineInst";
import Story from "../Story/Story";
import { useDispatch, useSelector } from "react-redux";
import {
  setCount,
  setScrollDirection,
} from "../../../../../../BusinessLogic/Redux/PhoneSlice";

const MainContent = () => {
  const dispatch = useDispatch();
  const { name, isScrollingUp, count } = useSelector(
    (state) => state.phoneReducer
  );

  const handleScroll = (e) => {
    let currentScroll = e.target.scrollTop;
    // console.log(" scroll.target : ", e.target.scrollTop);
    dispatch(setScrollDirection(currentScroll));
  };

  return (
    <div
      id={"elem"}
      onScroll={(e) => handleScroll(e)}
      className={mainContent.mainContent}>
      <TopLineInst />
      <Story />
      <Story />
      <h1>MainContent</h1>
      <h1>MainContent</h1>
      <h1>MainContent</h1>
      <Story />
    </div>
  );
};

export default MainContent;
// (() => {
//   const handleScroll = () => {
//     // const currentScrollTop = props.ref.current.scrollY;
//     const currentScrollTop = window.scrollY;
//     const isScrollingUp = currentScrollTop < lastScrollTop;
//     // console.log("isScrollingUp : ", isScrollingUp);
//     // console.log("ref : ", ref);
//     dispatch(setScrollDirection(isScrollingUp));

//     lastScrollTop = currentScrollTop;
//   };
//   let lastScrollTop = 0;

//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };

//   const scroll = ref.current;
//   console.log("MainContent scroll.scrollTop : ", scroll.scrollTop);
// }, [dispatch]);
