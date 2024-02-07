import React, { useEffect, useRef } from "react";
import topLI from "./TopLineInst.module.css";
import { useDispatch, useSelector } from "react-redux";
import { stateConst } from "../../../../../../../BusinessLogic/State/StateConst";

const TopLineInst = (props) => {
  const dispatch = useDispatch();
  const { name, isScrollingUp } = useSelector(
    (state) => state.phoneReducer.main
  );

  return (
    <header
      // className={isScrollingUp ? topLI.visible : topLI.hidden}
      className={isScrollingUp ? topLI.visible : topLI.hidden}

      // style={{transform : {isScrollingUp ? 'translateY(0)' : "translateY(-10px)" }}}
      //     {isScrollingUp ?   className={topLI.visible} :   className={topLI.hidden}}
    >
      {/* Ваше навигационное меню и другие элементы хедера */}
      <div className={topLI.topLI}>
        <div className={topLI.left}>Instagram</div>
        <div className={topLI.right}>
          <img src={stateConst.image.instProfilePage.like2} />
          <img src={stateConst.image.instProfilePage.direct3} />
        </div>
      </div>
    </header>
  );
};

export default TopLineInst;
