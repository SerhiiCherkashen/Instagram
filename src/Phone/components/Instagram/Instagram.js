import React from "react";
import inst from "./Instagram.module.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Search from "./components/Search/Search";
import AddPost from "./components/AddPost/AddPost";
import Reels from "./components/Reels/Reels";
import Profile from "./components/Profile/Profile";
import BottomLineInst from "./BottomLineInst/BottomLineInst";

const Instagram = () => {
  return (
    <div className={inst.inst}>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <Routes>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
      <Routes>
        <Route path="/addPost" element={<AddPost />}></Route>
      </Routes>
      <Routes>
        <Route path="/reels" element={<Reels />}></Route>
      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <BottomLineInst />
    </div>
  );
};

export default Instagram;
