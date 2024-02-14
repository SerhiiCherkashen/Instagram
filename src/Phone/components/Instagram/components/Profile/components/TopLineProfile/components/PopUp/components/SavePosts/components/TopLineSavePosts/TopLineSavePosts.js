import React from "react";
import topLSP from "./TopLineSavePosts.module.css";
import { Link } from "react-router-dom";
import { stateConst } from "../../../../../../../../../../../../../BusinessLogic/State/StateConst";

const TopLineSavePosts = (props) => {
  return (
    <div>
      <div className={topLSP.topLSP}>
        <div className={topLSP.backDop}>
          <Link to="/profile">
            <img src={stateConst.image.instProfilePage.back} />
          </Link>
          <div>Dopisi</div>
        </div>
        <div className={topLSP.right}> </div>
      </div>
    </div>
  );
};

export default TopLineSavePosts;
