import React from "react";
import dataP from "./DataProfile.module.css";
import { useSelector } from "react-redux";
import { stateConst } from "../../../../../../../BusinessLogic/State/StateConst";

const DataProfile = (props) => {
  const account = props.account;
  const { myAccount } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  // console.log("DataProfile account.name : ", account.name);
  return (
    <div className={dataP.dataP}>
      <div className={dataP.imgFollowers}>
        <div>
          <img
            style={{ width: "100px", height: "100px", borderRadius: "50px" }}
            src={account.profilePhoto}
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
      <div className={dataP.buttons}>
        <button className={dataP.button}>Change Profile</button>
        <button>QqqqqqqRrrrrrrr</button>
        <button>
          <img src={stateConst.image.instBottomIcons.profile} />
        </button>
      </div>
    </div>
  );
};

export default DataProfile;
