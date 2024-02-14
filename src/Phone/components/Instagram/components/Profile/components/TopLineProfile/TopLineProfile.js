import React from "react";
import topLPr from "./TopLineProfile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { stateConst } from "../../../../../../../BusinessLogic/State/StateConst";
import { Link } from "react-router-dom";
import { back } from "../../../../../../../BusinessLogic/Redux/PhoneSlice";
import {
  closePopup,
  openPopup,
} from "../../../../../../../BusinessLogic/Redux/ProfileSlice";

const TopLineProfile = (props) => {
  const dispatch = useDispatch();
  const { urlParams, urlBack, asd, profile } = useSelector(
    (state) => state.phoneReducer
  );
  // console.log("TopLineProfile profile.isOpen : ", profile.isOpen);

  let index = urlParams.length - 2;
  let url = urlParams[index];
  const account = props.account;
  const { myAccount } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );

  return (
    <>
      {account.id === "_serhii_007_" ? (
        <div className={topLPr.topLPrMyAcc}>
          {/* // <div> */}
          <div className={topLPr.accId}>{account.id}</div>
          <img
            onClick={() => dispatch(openPopup())}
            src={stateConst.image.instBottomIcons.add}
          />
        </div>
      ) : (
        <div className={topLPr.topLPr}>
          <div className={topLPr.left}>
            <div className={topLPr.link} onClick={() => dispatch(back())}>
              <Link to={"/"}>
                <img src={stateConst.image.instProfilePage.back} />
              </Link>
            </div>
            <div>{account.id}</div>
          </div>
          <div className={topLPr.right}>
            <img src={stateConst.image.instProfilePage.clock2} />
            <img src={stateConst.image.instProfilePage.threeDot} />
          </div>
        </div>
      )}
    </>
  );
};

export default TopLineProfile;
