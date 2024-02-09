// Popup.js
import React from "react";
import pop from "./PopUp.module.css";
import { useSelector, useDispatch } from "react-redux";
import { closePopup } from "../../../../../../../../../BusinessLogic/Redux/ProfileSlice";
import { stateConst } from "../../../../../../../../../BusinessLogic/State/StateConst";
import { Link } from "react-router-dom";

const PopUp = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.profileReducer.main);
  console.log("isOpen : ", isOpen);

  const handleClose = () => {
    dispatch(closePopup());
  };

  return (
    <div className={`${pop.popup} ${pop.open}  `}>
      {/* /isOpen &&/ */}
      {/* {`popup ${isOpen ? 'open' : ''}`} */}
      <div className={pop.topDiv} onClick={handleClose}></div>
      <div className={pop.popupContent}>
        {/* <span className={pop.close} onClick={handleClose}>
          &times;
        </span> */}
        <div>
          <div className={pop.line}>
            <img src={stateConst.image.instProfilePage.clock2} />
            <span>Arhiv</span>
          </div>
          <div className={pop.line}>
            <img src={stateConst.image.instProfilePage.clock2} />
            <span>Arhiv</span>
          </div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/savePosts">
            <div className={pop.line}>
              <img src={stateConst.image.instProfilePage.save} />
              <span>Save</span>
            </div>
          </Link>
          <div className={pop.line}>
            <img src={stateConst.image.instProfilePage.clock2} />
            <span>Arhiv</span>
          </div>
        </div>
        {/* <p>This is the content of the popup.</p> */}
      </div>
    </div>
  );
};

export default PopUp;
