import React, { useEffect, useRef } from "react";
import topLI from "./TopLineInst.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setScrollDirection } from "../../../../../../BusinessLogic/Redux/PhoneSlice";

const TopLineInst = (props) => {
  const dispatch = useDispatch();
  const { name, isScrollingUp } = useSelector((state) => state.phoneReducer);

  return (
    <header className={isScrollingUp ? topLI.visible : topLI.hidden}>
      {/* Ваше навигационное меню и другие элементы хедера */}
      <div className={topLI.topLI}>
        <h1>TopLineInst</h1>
      </div>
    </header>
  );
};

export default TopLineInst;
