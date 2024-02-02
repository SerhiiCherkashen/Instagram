import React from "react";
import bottomLPh from "./BottomLinePhone.module.css";
import { stateConst } from "../../../../BusinessLogic/State/StateConst";

const BottomLinePhone = () => {
  return (
    <div className={bottomLPh.bottomLPh}>
      <div className={bottomLPh.asd}>
        <img src={stateConst.image.phoneBottomIcon.triangle} />
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
