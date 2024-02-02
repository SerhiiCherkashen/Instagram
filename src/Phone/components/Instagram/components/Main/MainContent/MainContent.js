import React from "react";
import mainContent from "./MainContent.module.css";
import TopLineInst from "../TopLineInst/TopLineInst";
import Story from "../Story/Story";

const MainContent = () => {
  return (
    <div className={mainContent.mainContent}>
      <h1>MainContent</h1>
      <TopLineInst />
      <Story />
      <Story /> <h1>MainContent</h1>
      <Story />
      <Story /> <h1>MainContent</h1> <h1>MainContent</h1>
      <Story />
      <Story />
      <Story /> <h1>MainContent</h1>
      <Story />
      <Story /> <h1>MainContent</h1>
      <Story />
    </div>
  );
};

export default MainContent;
