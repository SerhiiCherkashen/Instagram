import React from "react";
import main from "./Main.module.css";
import TopLineInst from "./TopLineInst/TopLineInst";
import Story from "./Story/Story";
import MainContent from "./MainContent/MainContent";

const Main = () => {
  return (
    <div className={main.main}>
      <h1>Main</h1>
      <MainContent />
    </div>
  );
};

export default Main;
