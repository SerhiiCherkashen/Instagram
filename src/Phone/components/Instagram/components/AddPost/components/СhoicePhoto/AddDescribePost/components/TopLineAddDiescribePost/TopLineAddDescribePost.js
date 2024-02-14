import React from "react";
import topLDP from "./TopLineAddDescribePost.module.css";
import { useDispatch, useSelector } from "react-redux";
import { stateConst } from "../../../../../../../../../../BusinessLogic/State/StateConst";
import { Link } from "react-router-dom";

const TopLineAddDescribePost = () => {
  const dispatch = useDispatch();
  const { stateAccounts, addSelectedPhoto } = useSelector(
    (state) => state.phoneReducer
  );
  return (
    <div className={topLDP.topLDP}>
      <Link to="/addPost">
        <img src={stateConst.image.instProfilePage.back} />{" "}
      </Link>
      <div className={topLDP.dopis}>New Dopis</div>
    </div>
  );
};

export default TopLineAddDescribePost;
