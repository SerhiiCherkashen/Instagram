import React from "react";
import dataP from "./DataProfile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { stateConst } from "../../../../../../../BusinessLogic/State/StateConst";
import { changeColor } from "../../../../../../../BusinessLogic/Redux/PhoneSlice";

const DataProfile = (props) => {
  const dispatch = useDispatch();
  const account = props.account;
  const { color } = useSelector((state) => state.phoneReducer);
  const { myAccount } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  // console.log("DataProfile account.name : ", account.name);
  return (
    // <>
    //   {account.id === "_serhii_007_" ? }</>
    <div className={dataP.dataP}>
      <div className={dataP.imgFollowers}>
        <div>
          <img
            style={{ width: "100px", height: "100px", borderRadius: "50px" }}
            src={account.profilePhoto}
            alt="..."
            // src={"https://s.ill.in.ua/i/custom/1024x0/63763/63763814056648.jpg"}
          />
        </div>
        <div>
          <div className={dataP.number}>{account.posts.length}</div>
          <div className={dataP.text}>dopisi</div>
        </div>
        <div>
          <div className={dataP.number}>{account.myFollowers.length}</div>
          <div className={dataP.text}>chitachi</div>
        </div>
        <div>
          <div className={dataP.number}>{account.mySubscriptions.length}</div>
          <div className={dataP.text}>ctejit</div>
        </div>
      </div>
      <div className={dataP.name}>{account.name}</div>

      {account.id === "_serhii_007_" ? (
        <div className={dataP.buttons}>
          <button className={dataP.subscribeMessage}>Change Profile</button>
          <button className={dataP.subscribeMessage}>QqqqqqqRrrrrrrr</button>
          <button>
            <img src={stateConst.image.instBottomIcons.profile} />
          </button>
        </div>
      ) : (
        <div className={dataP.buttons}>
          {color ? (
            <button
              onClick={() => dispatch(changeColor())}
              className={`${dataP.subscribeMessage}  ${dataP.blue}`}>
              Stejiti
            </button>
          ) : (
            <button
              onClick={() => dispatch(changeColor())}
              className={`${dataP.subscribeMessage}    `}>
              Stejy
            </button>
          )}
          {/* <button
            onClick={() => dispatch(changeColor())}
            className={`${dataP.subscribeMessage}  ${color && dataP.blue} `}>
            Stejiti
          </button> */}
          <button className={dataP.subscribeMessage}>Message</button>
          <button>
            <img src={stateConst.image.instBottomIcons.profile} />
          </button>
        </div>
      )}
    </div>
  );
};

export default DataProfile;
