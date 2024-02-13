import React, { useEffect, useRef, useState } from "react";
import OneVideo from "./OneVideo/OneVideo";
import { useSelector } from "react-redux";

const WrapVideos = () => {
  const { testStateVideo } = useSelector((state) => state.phoneReducer);

  // const [elementPosition, setElementPosition] = useState({ top: 0, left: 0 });
  // const targetRef = useRef(null);

  // useEffect(() => {
  //   console.log("effect");
  //   const handleScroll = () => {
  //     const targetElement = targetRef.current;
  //     if (targetElement) {
  //       const { top, left } = targetElement.getBoundingClientRect();
  //       setElementPosition({ top, left });
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div>
      <h1>WrapVideos</h1>
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
