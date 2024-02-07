import React from "react";
import story from "./Story.module.css";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../../../../../../BusinessLogic/Redux/PhoneSlice";
import { Link } from "react-router-dom";
// import { like } from "../../../../../../../BusinessLogic/Redux/PostSlice";

const Story = () => {
  const dispatch = useDispatch();
  // const { accounts } = useSelector((state) => state.phoneReducer.stateAccount);
  // const { accounts, myAccount } = useSelector(
  //   (state) => state.postReducer.stateAccounts
  // );
  const { accounts, myAccount } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  // console.log("Story : ", accounts[0].name);
  return (
    <div className={story.story}>
      <Link to="/account">
        <h1>Story</h1>
      </Link>
      <h1>{accounts[0].posts[1].likesss}</h1>
      {/* <h1>{accounts[0].posts[1].likes}</h1> */}
      {/* <h1>{accounts[0].posts[1].likes.length}</h1> */}
      <button
        onClick={() => dispatch(like({ accountsIndex: 0, postIndex: 1 }))}>
        +
      </button>
    </div>
  );
};

export default Story;
