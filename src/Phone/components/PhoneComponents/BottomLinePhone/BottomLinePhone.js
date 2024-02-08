import React from "react";
import bottomLPh from "./BottomLinePhone.module.css";
import { stateConst } from "../../../../BusinessLogic/State/StateConst";
import { useDispatch, useSelector } from "react-redux";
import { back } from "../../../../BusinessLogic/Redux/PhoneSlice";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

const BottomLinePhone = () => {
  const dispatch = useDispatch();
  const { urlBack } = useSelector((state) => state.phoneReducer);
  // const { asd } = useSelector;

  // const handleClick = () => {
  //   dispatch(back());
  // };
  return (
    <div className={bottomLPh.bottomLPh}>
      <div onClick={() => dispatch(back())} className={bottomLPh.asd}>
        <Link to={`${urlBack}`}>
          <img src={stateConst.image.phoneBottomIcon.triangle} />
        </Link>
      </div>
      <div className={bottomLPh.asd}>
        <img src={stateConst.image.phoneBottomIcon.round} />
      </div>
      <div className={bottomLPh.asd}>
        <img src={stateConst.image.phoneBottomIcon.square} />
      </div>
    </div>
  );
};

export default BottomLinePhone;
