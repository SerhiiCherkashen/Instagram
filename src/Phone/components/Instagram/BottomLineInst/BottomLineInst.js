import React from "react";
import bottomLI from "./BottomLineInst.module.css";
import { stateConst } from "../../../../BusinessLogic/State/StateConst";
import { Link } from "react-router-dom";

const BottomLineInst = () => {
  return (
    <div className={bottomLI.bottomLI}>
      <div className={bottomLI.asd}>
        <Link to="/">
          <img src={stateConst.image.instBottomIcons.home} />
        </Link>
      </div>
      <div className={bottomLI.asd}>
        <Link to="/search">
          <img src={stateConst.image.instBottomIcons.search2} />
        </Link>
      </div>
      <div className={bottomLI.asd}>
        <Link to="/addPost">
          <img src={stateConst.image.instBottomIcons.add2} />
        </Link>
      </div>
      <div className={bottomLI.asd}>
        <Link to="/reels">
          <img src={stateConst.image.instBottomIcons.reels} />
        </Link>
      </div>
      <div className={bottomLI.asd}>
        <Link to="/profile">
          <img src={stateConst.image.instBottomIcons.profile} />
        </Link>
      </div>
    </div>
  );
};

export default BottomLineInst;
