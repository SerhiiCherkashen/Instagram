import React from "react";
import topLA from "./TopLineAdd.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { back } from "../../../../../../../BusinessLogic/Redux/PhoneSlice";
import { stateConst } from "../../../../../../../BusinessLogic/State/StateConst";

const TopLineAdd = () => {
  const dispatch = useDispatch();
  const { urlBack } = useSelector((state) => state.phoneReducer);
  return (
    <div className={topLA.topLA}>
      {/* <h1>TopLineAdd</h1> */}
      <div className={topLA.left}>
        <div onClick={() => dispatch(back())} className={topLA.asd}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`${urlBack}`}>
            {/* <img src={stateConst.image.phoneBottomIcon.triangle} /> */}X
          </Link>
        </div>

        <div> New Dopis</div>
      </div>
      <div className={topLA.right}>
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(14, 138, 255)",
            // color: "blue",
          }}
          to="/addDescribePost">
          Dali
        </Link>
      </div>
    </div>
  );
};

export default TopLineAdd;
