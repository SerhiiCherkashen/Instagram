import React from "react";
import topLPr from "./TopLineProfile.module.css";
import { useSelector } from "react-redux";
import { stateConst } from "../../../../../../../BusinessLogic/State/StateConst";

const TopLineProfile = () => {
  const { myAccount } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  return (
    <div className={topLPr.topLPr}>
      {/* <h1>TopLineProfile</h1> */}

      <div>{myAccount.id}</div>
      <img src={stateConst.image.instBottomIcons.add} />
    </div>
  );
};

export default TopLineProfile;
