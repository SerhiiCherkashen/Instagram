import React from "react";
import topLR from "./TopLineRibbon.module.css";
import { stateConst } from "../../../../../../../../../BusinessLogic/State/StateConst";
import { Link } from "react-router-dom";

const TopLineRibbon = () => {
  return (
    <div className={topLR.topLR}>
      {/* <h1>TopLineRibbon</h1> */}
      <div className={topLR.backDop}>
        <Link to="/account">
          <img src={stateConst.image.instProfilePage.back} />
        </Link>
        <div>Dopisy</div>
      </div>
      <div className={topLR.right}> </div>
    </div>
  );
};

export default TopLineRibbon;
