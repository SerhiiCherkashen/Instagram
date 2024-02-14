import React from "react";
import addDP from "./AddDescribePost.module.css";
import { useDispatch, useSelector } from "react-redux";
import ChoiceDescribePost from "./components/ChoiceDescribePost/ChoiceDescribePost";
import TopLineAddDescribePost from "./components/TopLineAddDiescribePost/TopLineAddDescribePost";

const AddDescribePost = () => {
  const dispatch = useDispatch();
  const { stateAccounts, addSelectedPhoto } = useSelector(
    (state) => state.phoneReducer
  );
  return (
    <div className={addDP.addDP}>
      {/* <h1>AddDescribePost</h1> */}
      <TopLineAddDescribePost />
      <ChoiceDescribePost />
    </div>
  );
};

export default AddDescribePost;
