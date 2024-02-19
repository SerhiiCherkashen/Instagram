import React from "react";
import searchOP from "./SearchOnePost.module.css";
import { stateConst } from "../../../../../../../../../../../../BusinessLogic/State/StateConst";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchOnePost = (props) => {
  const dispatch = useDispatch();
  const { image, array, dataOnePost } = useSelector(
    (state) => state.searchReducer
  );
  return (
    <div className={searchOP.searchOP}>
      <div className={searchOP.higherImg}>
        <div className={searchOP.logoId}>
          <img src={dataOnePost.profilePhoto} />
          <div
            // onClick={() =>
            //   dispatch(changeCurrentAccount(accounts[accountIndex].id))
            // }
            className={searchOP.id}>
            {/* <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/account"> */}
            {dataOnePost.id}
            {/* </Link> */}
          </div>
        </div>
        <div>
          <img src={stateConst.image.instProfilePage.threeDot} />
        </div>
      </div>
      <div className={searchOP.wrapLike}>
        <img
          // src={props.image}
          src={props.image}
          alt="---"
        />
      </div>
      <div className={searchOP.wrapUnderPhoto}>
        <div className={searchOP.lcsSave}>
          <div className={searchOP.likeCommentShare}>
            {/* <div></div> */}
            <img src={stateConst.image.instProfilePage.like3} />
            <img src={stateConst.image.instProfilePage.comment} />
            <img src={stateConst.image.instProfilePage.share} />
          </div>
          <div className={searchOP.save}>
            <img />
          </div>
        </div>
        <div className={searchOP.countLike}>{10 + " " + "like"}</div>
      </div>
    </div>
  );
};

export default SearchOnePost;
