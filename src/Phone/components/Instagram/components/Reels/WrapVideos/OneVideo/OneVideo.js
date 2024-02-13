import React, { useEffect, useRef } from "react";
import { stateConst } from "../../../../../../../BusinessLogic/State/StateConst";
import { mute } from "react-html5video";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMutedOnScroll,
  getPositionOnScroll,
  mutedSwitch,
} from "../../../../../../../BusinessLogic/Redux/PhoneSlice";

const OneVideo = (props) => {
  const dispatch = useDispatch();
  const { stateAccounts, reelsScroll } = useSelector(
    (state) => state.phoneReducer
  );

  // const targetRef = useRef(null);

  // const getPosition = (id) => {
  //   const targetElement = targetRef.current;
  //   if (targetElement) {
  //     const { top, bottom } = targetElement.getBoundingClientRect();
  //     //   console.log(id, "------------------------------------------");
  //     //   console.log("Top:", top);
  //     //   console.log("Bottom:", bottom);
  //     return { id, top, bottom };
  //   }
  // };

  // setInterval(() => {
  //   // () => dispatch(getPositionOnScroll());
  //   // dispatch(getPositionOnScroll(getPosition(props.id)));
  //   let result = getPosition(props.id);
  //   // console.log("setInterval   result  :", result);
  //   if (typeof result === "object" && result !== undefined) {
  //     if (result.top < 200 && result.top > 0) {
  //       dispatch(changeMutedOnScroll(result.id));
  //     }
  //   }
  // }, 1000);
  //   useEffect(() => {
  //     console.log("effect");
  //   });
  return (
    <div
    //   onScroll={(e) => {
    //     getPosition();
    //     // console.log("OneVideo :  ", e);
    //     // console.log("OneVideo :  ", e.target.scrollTop);
    //     // console.log("OneVideo :  ", e.target.scrollHeight);
    //     // console.log("OneVideo :  ", e.target.clientHeight);
    //   }}
    >
      {/* <button onClick={() => getPosition()}>Get Element Position</button> */}
      <video
        // ref={targetRef}
        loop
        autoPlay={true}
        muted={props.muted}
        width="90%"
        height="auto">
        <source src={props.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        style={{ fontSize: "30px" }}
        onClick={() => dispatch(mutedSwitch(props.id))}>
        Song
      </button>
    </div>
  );
};

export default OneVideo;
