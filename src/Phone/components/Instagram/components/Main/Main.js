import React, { useEffect, useRef } from "react";
import main from "./Main.module.css";
import Story from "./MainContent/Stories/WrapStories/WrapStories";
import MainContent from "./MainContent/MainContent";
import { current } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  changeFirstRender,
  doStoryBook,
  scroll,
} from "../../../../../BusinessLogic/Redux/PhoneSlice";

const Main = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    dispatch(scroll());
    dispatch(changeFirstRender());
    dispatch(doStoryBook());
  });
  return (
    <div className={main.main}>
      <MainContent />
    </div>
  );
};

export default Main;
