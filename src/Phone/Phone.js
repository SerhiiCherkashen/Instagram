import React from "react";
import phone from "./Phone.module.css";
import TopLinePhone from "./components/PhoneComponents/TopLinePhone/TopLinePhone";
import Instagram from "./components/Instagram/Instagram";
import BottomLinePhone from "./components/PhoneComponents/BottomLinePhone/BottomLinePhone";

const Phone = () => {
  return (
    <div className={phone.phoneContainer}>
      <TopLinePhone />
      <Instagram />
      <BottomLinePhone />
    </div>
  );
};

export default Phone;
