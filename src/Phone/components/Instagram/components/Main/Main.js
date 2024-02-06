import React, { useEffect, useRef } from "react";
import main from "./Main.module.css";
import Story from "./MainContent/Story/Story";
import MainContent from "./MainContent/MainContent";
import { current } from "@reduxjs/toolkit";

const Main = () => {
  const ref = useRef();

  return (
    <div className={main.main}>
      <MainContent />
    </div>
  );
};

export default Main;
