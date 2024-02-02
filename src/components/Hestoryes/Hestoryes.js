import React, { useState } from "react";
import cat1 from "../../Image/cat1.jpg";
import cat2 from "../../Image/cat2.png";
import cat3 from "../../Image/cat3.webp";
import "./Hestoryes.css";

const Historyes = () => {
  const [oneCount, setOneCount] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  //
  const [down, setDown] = useState(false);
  const [up, setUp] = useState(false);
  const [x, setX] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [marginRight, setMarginRight] = useState(0);
  const [moveMarginLeft, setMoveMarginLeft] = useState(0);
  const [moveMarginRight, setMoveMarginRight] = useState(0);
  const [widthContent, setWidthContent] = useState("3000px");

  const mouseDownFn = (e) => {
    setDown(true);
    setUp(false);
    setX(e.clientX);
    console.log("D    X : ", x);
    // console.log("D   marginLeft : ", marginLeft);
    console.log("D   marginRight : ", marginRight);
    // console.log("D   moveMarginLeft : ", moveMarginLeft);
    console.log("D   moveMarginRight : ", moveMarginRight);
  };

  const mouseMoveFn = (e) => {
    let different = null;
    if (down && !up) {
      // console.log("mouseMoveFn X : ", x);
      let currentX = e.clientX;
      if (x > currentX) {
        different = x - currentX;
        setMoveMarginRight(different);
        // console.log(different);
      } else if (x < currentX) {
        console.log(">>>>>>>>>");
        different = currentX - x;
        setMoveMarginLeft(different);
      }
      console.log("different : ", different);
    }
  };
  const mouseUpFn = (e) => {
    setUp(true);
    setDown(false);
    setMarginLeft(marginLeft + moveMarginLeft);
    setMarginRight(marginRight + moveMarginRight);
    // setMarginLeft(marginLeft + moveMarginLeft);
    // setMarginRight(marginRight + moveMarginRight);
    setMoveMarginLeft(0);
    setMoveMarginRight(0);
    console.log("Up   marginLeft : ", marginLeft);
    console.log("Up   marginRight : ", marginRight);
    console.log("Up   moveMarginLeft : ", moveMarginLeft);
    console.log("Up   moveMarginRight : ", moveMarginRight);
  };
  const mouseLeaveFn = (e) => {
    console.log("leave");
    setUp(true);
    setDown(false);
    setMarginLeft(marginLeft + moveMarginLeft);
    setMarginRight(marginRight + moveMarginRight);
    setMoveMarginLeft(0);
    setMoveMarginRight(0);
    console.log("Up   marginLeft : ", marginLeft);
    console.log("Up   marginRight : ", marginRight);
    console.log("Up   moveMarginLeft : ", moveMarginLeft);
    console.log("Up   moveMarginRight : ", moveMarginRight);
  };

  const clickArea = (e) => {
    console.log("clickArea : ", e);
  };

  const stories = [
    <img key={1} src={cat1} alt="Story 1" />,
    <img key={2} src={cat2} alt="Story 2" />,
    // Добавьте другие элементы, которые вы хотите отобразить в истории
  ];

  return (
    <div>
      <div
        onClick={(e) => clickArea(e.nativeEvent)}
        // onPointerMove={}
        style={{
          width: widthContent,
          marginLeft: marginLeft + moveMarginLeft + "px",
          marginRight: marginRight + moveMarginRight + "px",
        }}
        className="areaTest">
        <div className="item">item - 1</div>
        <div className="item">item - 2</div>
        <div className="item">item - 3</div>
        <div className="item">item -4</div>
        <div className="item">item -5</div>
        <div className="item">item - 6</div>
        {/* <div
          // onClick={(e) => console.log("bigBox", e.nativeEvent)}
          className="bigBox"></div>
        <div className="box"> </div>
        <div className="bigBox"></div>
        <div className="box"> </div>
        <div
          onMouseMove={(e) => mouseMoveFn(e)}
          onMouseDown={(e) => mouseDownFn(e)}
          onMouseLeave={(e) => mouseLeaveFn(e)}
          onMouseUp={(e) => mouseUpFn(e)}
          className="screen"></div>
        <div className="bigBox"></div>
        <div className="box"> </div>
        <div className="bigBox"></div>
        <div className="box"> </div>
        <div className="bigBox"></div>
        asd */}
      </div>
    </div>
  );
};

export default Historyes;
