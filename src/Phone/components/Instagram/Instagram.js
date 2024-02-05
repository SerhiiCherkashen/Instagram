import React, { useEffect, useRef } from "react";
import inst from "./Instagram.module.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Search from "./components/Search/Search";
import AddPost from "./components/AddPost/AddPost";
import Reels from "./components/Reels/Reels";
import Profile from "./components/Profile/Profile";
import BottomLineInst from "./BottomLineInst/BottomLineInst";

const Instagram = () => {
  // const ref = useRef();

  // useEffect(() => {
  //   const scroll = ref.current;
  //   // console.log("Main ref.current : ", ref.current);
  //   // console.log("Main scroll : ", scroll);
  //   console.log("Instagram scroll : ", scroll.scrollTop);
  // });
  return (
    <div
      //  ref={ref}
      className={inst.inst}>
      <Routes>
        <Route className={inst.route} path="/" element={<Main />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/addPost" element={<AddPost />}></Route>
        <Route path="/reels" element={<Reels />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <BottomLineInst />
    </div>
  );
};

export default Instagram;
