import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mutedSwitch } from "../../../../../../../BusinessLogic/Redux/PhoneSlice";
import oneVideo from "./OneVideo.module.css";
import { stateConst } from "../../../../../../../BusinessLogic/State/StateConst";

const OneVideo = (props) => {
  const dispatch = useDispatch();
  const { stateAccounts, reelsScroll } = useSelector(
    (state) => state.phoneReducer
  );

  return (
    <div className={oneVideo.oneVideo}>
      <video
        loop
        autoPlay={true}
        muted={props.muted}
        width="100%"
        height="auto">
        <source src={props.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={() => dispatch(mutedSwitch(props.id))}>
        <img src={stateConst.image.instProfilePage.sound} />
      </button>
    </div>
  );
};

export default OneVideo;
