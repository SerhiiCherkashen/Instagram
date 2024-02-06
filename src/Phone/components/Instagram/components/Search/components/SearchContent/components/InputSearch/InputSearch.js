import React from "react";
import inputS from "./InputSearch.module.css";

const InputSearch = () => {
  return (
    <div className={inputS.inputS}>
      <h1>InputSearch</h1>
      <input style={{ width: "100%", height: "30px" }} value={"Shykati"} />
    </div>
  );
};

export default InputSearch;
