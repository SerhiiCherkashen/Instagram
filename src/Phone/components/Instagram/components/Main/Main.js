import React, { useEffect, useRef } from "react";
import main from "./Main.module.css";
import Story from "./MainContent/Story/Story";
import MainContent from "./MainContent/MainContent";
import { current } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  changeFirstRender,
  scroll,
} from "../../../../../BusinessLogic/Redux/PhoneSlice";

const Main = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    // console.log(
    //   "UseEffect    Main     Main     Main     Main    Main     Main     Main     Main "
    // );

    dispatch(scroll());
    dispatch(changeFirstRender());
    // console.log("useEffect IF ");

    // console.log("useEffect");
  });
  return (
    <div className={main.main}>
      <MainContent />
    </div>
  );
};

export default Main;
