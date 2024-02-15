import React from "react";
import dataP from "./DataProfile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { stateConst } from "../../../../../../../BusinessLogic/State/StateConst";
import {
  accountClickProfilePhoto,
  changeColor,
  subscribe,
} from "../../../../../../../BusinessLogic/Redux/PhoneSlice";
import { Link } from "react-router-dom";

const DataProfile = (props) => {
  const dispatch = useDispatch();
  const { color, stateAccounts } = useSelector((state) => state.phoneReducer);
  const account = props.account;

  const indexCurrentAccount = stateAccounts.accounts.findIndex((element) => {
    return element.id === props.account.id;
  });

  const indexMyAccount = stateAccounts.accounts.findIndex((element) => {
    return element.id === stateAccounts.myId;
  });

  let colorButtonFollow = stateAccounts.accounts[
    indexCurrentAccount
  ].myFollowers.findIndex((element) => {
    return element === stateAccounts.myId;
  });
  if (colorButtonFollow === -1) {
    colorButtonFollow = false;
  } else {
    colorButtonFollow = true;
  }

  const status = account.stories.findIndex((element) => {
    console.log("WrapStories (element) : ", element.viewed);
    return element.viewed === false;
  });

  // if (status !== -1) {

  return (
    // <>
    //   {account.id === "_serhii_007_" ? }</>
    <div className={dataP.dataP}>
      <div className={dataP.imgFollowers}>
        <div onClick={() => dispatch(accountClickProfilePhoto(account))}>
          {account.stories.length > 0 && status !== -1 ? (
            <Link to="/oneStory">
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50px",
                  border: "10px solid red",
                }}
                src={account.profilePhoto}
                alt="..."
              />
            </Link>
          ) : (
            <>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50px",
                }}
                src={account.profilePhoto}
                alt="..."
              />
            </>
          )}
        </div>
        <div>
          <div className={dataP.number}>
            {stateAccounts.accounts[indexCurrentAccount].posts.length}
          </div>
          <div className={dataP.text}>dopisi</div>
        </div>
        <div>
          <div className={dataP.number}>
            {stateAccounts.accounts[indexCurrentAccount].myFollowers.length}
          </div>
          <div className={dataP.text}>chitachi</div>
        </div>
        <div>
          <div className={dataP.number}>
            {stateAccounts.accounts[indexCurrentAccount].mySubscriptions.length}
          </div>
          <div className={dataP.text}>ctejit</div>
        </div>
      </div>
      <div className={dataP.name}>
        {stateAccounts.accounts[indexCurrentAccount].name}
      </div>

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
          {colorButtonFollow ? (
            <button
              onClick={() => dispatch(subscribe(account.id))}
              className={`${dataP.subscribeMessage}  `}>
              Stejy
            </button>
          ) : (
            <button
              onClick={() => dispatch(subscribe(account.id))}
              className={`${dataP.subscribeMessage}   ${dataP.blue} `}>
              Stejiti
            </button>
          )}

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
