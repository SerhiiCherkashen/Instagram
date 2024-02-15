import React from "react";
import stories from "./Stories.module.css";
import { useDispatch, useSelector } from "react-redux";
import WrapStories from "./WrapStories/WrapStories";

const Stories = () => {
  const dispatch = useDispatch();
  const { stateAccounts } = useSelector((state) => state.phoneReducer);

  return (
    <div className={stories.stories}>
      {/* <h1>Stories</h1> */}
      <WrapStories />
    </div>
  );
};

export default Stories;
