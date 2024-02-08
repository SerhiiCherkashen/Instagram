import React from "react";
import topLPr from "./TopLineProfile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { stateConst } from "../../../../../../../BusinessLogic/State/StateConst";
import { Link } from "react-router-dom";
import { back } from "../../../../../../../BusinessLogic/Redux/PhoneSlice";

const TopLineProfile = (props) => {
  const dispatch = useDispatch();
  const { urlParams, urlBack, asd } = useSelector(
    (state) => state.phoneReducer
  );
  let index = urlParams.length - 2;
  let url = urlParams[index];
  // console.log("URL   : ", url);   //
  // let url = "/reels";
  const account = props.account;
  // console.log("TopLineProfile   urlBack : ", urlBack, asd); //
  // console.log("TopLineProfile   account : ", account);
  // console.log("TopLineProfile : ", Object.keys(account));
  const { myAccount } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  return (
    <>
      {account.id === "_serhii_007_" ? (
        <div className={topLPr.topLPr}>
          {/* // <div> */}
          <div>{account.id}</div>
          <img src={stateConst.image.instBottomIcons.add} />
          {/* // </div> */}
        </div>
      ) : (
        <div className={topLPr.topLPr}>
          {/* <div> */}
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
          {/* </div> */}
        </div>
      )}
      {/* // </div> */}
    </>
  );
};

export default TopLineProfile;
