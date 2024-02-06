import React from "react";
import onePost from "./OnePost.module.css";
import { stateConst } from "../../../../../../../../BusinessLogic/State/StateConst";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../../../../../../../BusinessLogic/Redux/PostSlice";

const OnePost = (props) => {
  const dispatch = useDispatch();
  const { myAccount } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  return (
    <div className={onePost.onePost}>
      {/* <h1>OnePost</h1> */}
      <img style={{ width: "100%" }} src={`${props.image}`} />
      <div className={onePost.lcsSave}>
        <div className={onePost.likeCommentShare}>
          <img
            onClick={(e) => dispatch(like(e))}
            src={stateConst.image.instProfilePage.like2}
          />
          <img src={stateConst.image.instProfilePage.comment} />
          <img src={stateConst.image.instProfilePage.share} />
        </div>
        <div className={onePost.save}>
          <img src={stateConst.image.instProfilePage.save} />
        </div>
      </div>
      <div>{props.name}</div>
    </div>
  );
};

export default OnePost;
