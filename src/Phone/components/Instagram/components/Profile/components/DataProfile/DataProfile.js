import React from "react";
import dataP from "./DataProfile.module.css";
import { useSelector } from "react-redux";
import { stateConst } from "../../../../../../../BusinessLogic/State/StateConst";

const DataProfile = () => {
  const { myAccount } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  return (
    <div className={dataP.dataP}>
      {/* <h1>DataProfile</h1> */}
      <div className={dataP.imgFollowers}>
        <div>
          <img
            style={{ width: "100px", height: "100px", borderRadius: "50px" }}
            src={"https://s.ill.in.ua/i/custom/1024x0/63763/63763814056648.jpg"}
          />
        </div>
        <div>
          <div className={dataP.number}>{myAccount.posts.length}</div>
          <div className={dataP.text}>dopisi</div>
        </div>
        <div>
          <div className={dataP.number}>{myAccount.myFollowers.length}</div>
          <div className={dataP.text}>chitachi</div>
        </div>
        <div>
          <div className={dataP.number}>{myAccount.mySubscriptions.length}</div>
          <div className={dataP.text}>ctejit</div>
        </div>
      </div>
      <div className={dataP.name}>{myAccount.name}</div>
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
