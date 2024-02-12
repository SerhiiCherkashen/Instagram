import React from "react";
import topLPh from "./TopLinePhone.module.css";
import { stateConst } from "../../../../BusinessLogic/State/StateConst";

const TopLinePhone = () => {
  return (
    <div
      //  style={{ position: "absolute" }}
      className={topLPh.topLPh}>
      <div className={topLPh.left}>
        <div className={topLPh.text}>12:00</div>
      </div>
      <img
        style={{ width: "20px" }}
        src="https://static.vecteezy.com/system/resources/thumbnails/009/380/392/small/smartphone-lens-clipart-design-illustration-free-png.png"
      />
      <div className={topLPh.right}>
        <img src={stateConst.image.topLinePhone.net} />
        <img src={stateConst.image.topLinePhone.net} />
        <img src={stateConst.image.topLinePhone.wifi} />
        <img src={stateConst.image.topLinePhone.battery} />
        <div className={topLPh.text}>100%</div>
      </div>
    </div>
  );
};

export default TopLinePhone;
