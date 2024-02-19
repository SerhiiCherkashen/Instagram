import React from "react";
import topLSR from "./TopLineSearchRibbon.module.css";
import { Link } from "react-router-dom";
import { stateConst } from "../../../../../../../../../../../BusinessLogic/State/StateConst";

const TopLineSearchRibbon = () => {
  return (
    <div className={topLSR.topLSR}>
      {/* <h1>TopLineSearchRibbon</h1>;<h1>TopLineRibbon</h1> */}
      <div className={topLSR.backDop}>
        <Link to="/search">
          <img src={stateConst.image.instProfilePage.back} />
        </Link>
        <div>Search</div>
      </div>
      <div className={topLSR.right}> </div>
    </div>
  );
};

export default TopLineSearchRibbon;
