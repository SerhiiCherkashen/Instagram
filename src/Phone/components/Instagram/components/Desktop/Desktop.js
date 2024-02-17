import React from "react";
import desktop from "./Desktop.module.css";
import { stateConst } from "../../../../../BusinessLogic/State/StateConst";
import { Link } from "react-router-dom";

const Desktop = () => {
  return (
    <div className={desktop.desktop}>
      <img src="https://wallpapers.com/images/featured/iphone-wltnz5o1xymafqmo.jpg" />
      {/* <div className={desktop.wrapScreen}> */}
      <div className={desktop.wrapApps}>
        {stateConst.imageApp.app.map((element) => {
          return (
            <div className={desktop.wrapApp}>
              {element.text === "Instagram" ? (
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  <img src={element.image} />
                  <div className={desktop.text}> {element.text} </div>
                </Link>
              ) : (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={element.src}>
                  <img src={element.image} />
                  <div className={desktop.text}> {element.text} </div>
                </Link>
              )}
              {/* <img src={element.image} />
              <div className={desktop.text}> {element.text} </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Desktop;
