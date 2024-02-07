import React from "react";
import topLPr from "./TopLineProfile.module.css";
import { useSelector } from "react-redux";
import { stateConst } from "../../../../../../../BusinessLogic/State/StateConst";

const TopLineProfile = (props) => {
  const account = props.account;
  // console.log("TopLineProfile   account : ", account);
  // console.log("TopLineProfile : ", Object.keys(account));
  const { myAccount } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  return (
    <div className={topLPr.topLPr}>
      {/* <h1>TopLineProfile</h1> */}

      <div>{account.id}</div>
      <img src={stateConst.image.instBottomIcons.add} />
    </div>
  );
};

export default TopLineProfile;
