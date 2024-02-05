import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
// import vidio from "../vidio.MP4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import Phone from "./Phone/Phone";

function App() {
  return (
    <div className="App">
      {/* <h1>Instagram</h1> */}
      {/* <Historyes /> */}
      <div className="wrapPhone">
        <Phone />
      </div>
    </div>
  );
}

export default App;
