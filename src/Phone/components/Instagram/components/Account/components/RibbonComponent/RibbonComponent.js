import React from "react";
import ribbonC from "./RibbonComponent.module.css";
import TopLineRibbon from "./components/TopLineRibbon/TopLineRibbon";
import Ribbon from "./components/Ribbon/Ribbon";

const RibbonComponent = () => {
  return (
    <div className={ribbonC.ribbonC}>
      <TopLineRibbon />
      <Ribbon />
    </div>
  );
};

export default RibbonComponent;
