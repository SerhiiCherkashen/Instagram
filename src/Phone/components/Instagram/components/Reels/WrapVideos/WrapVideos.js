import React, { useEffect, useRef, useState } from "react";
import OneVideo from "./OneVideo/OneVideo";
import { useSelector } from "react-redux";
import wrapVideos from "./WrapVideos.module.css";

const WrapVideos = () => {
  const { testStateVideo } = useSelector((state) => state.phoneReducer);

  return (
    <div className={wrapVideos.wrapVideos}>
      {/* <h1>WrapVideos</h1> */}
      {testStateVideo.map((element, index) => {
        return (
          <>
            <div key={index + Date.now()}>
              <OneVideo
                id={element.id}
                video={element.video}
                autoplay={element.autoplay}
                muted={element.muted}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default WrapVideos;
