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
import { params } from "../../../BusinessLogic/Redux/PhoneSlice";
import Ribbon from "./components/Account/components/RibbonComponent/components/Ribbon/Ribbon";
import RibbonComponent from "./components/Account/components/RibbonComponent/RibbonComponent";

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
  // const [countState, setCountState] = useState(true);
  // const { pressBack } = useSelector((state) => state.phoneReducer);

  useEffect(() => {
    dispatch(params(location.pathname));
    // console.log(
    //   "Instagram useEffect   location.pathname : ",
    //   location.pathname
    // ); //
    // setCountState(countState);
  });
  return (
    <div className={inst.inst}>
      <MyComponent />
      <Routes>
        <Route className={inst.route} path="/" element={<Main />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/addPost" element={<AddPost />}></Route>
        <Route path="/reels" element={<Reels />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/ribbonComponent" element={<RibbonComponent />}></Route>
      </Routes>
      <BottomLineInst />
    </div>
  );
};

export default Instagram;
