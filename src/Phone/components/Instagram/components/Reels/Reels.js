import React, { useEffect } from "react";
import reels from "./Reels.module.css";
import { stateConst } from "../../../../../BusinessLogic/State/StateConst";
import WrapVideos from "./WrapVideos/WrapVideos";
import { useDispatch, useSelector } from "react-redux";
import { writeReelsScroll } from "../../../../../BusinessLogic/Redux/PhoneSlice";

const Reels = () => {
  const dispatch = useDispatch();
  const { stateAccounts, reelsScroll } = useSelector(
    (state) => state.phoneReducer
  );
  useEffect(() => {
    console.log("effect");
  }, []);

  return (
    <div
      onScroll={(e) => {
        console.log(e.target.scrollTop);
      }}
      className={reels.reels}>
      <WrapVideos />
    </div>
  );
};

export default Reels;
