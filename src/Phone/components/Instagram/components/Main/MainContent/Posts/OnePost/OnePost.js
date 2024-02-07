import React from "react";
import onePost from "./OnePost.module.css";
import { stateConst } from "../../../../../../../../BusinessLogic/State/StateConst";
import { useDispatch, useSelector } from "react-redux";
// import { like } from "../../../../../../../../BusinessLogic/Redux/PostSlice";
import {
  changeCurrentAccount,
  like,
} from "../../../../../../../../BusinessLogic/Redux/PhoneSlice";
import { Link } from "react-router-dom";

const OnePost = (props) => {
  let element = props.element;
  // console.log("OnePost   props : ", props);
  // console.log("OnePost   element : ", element);
  // console.log("OnePost   props.post.likes : ", props.post.lekesss);
  // console.log("OnePost   Object props : ", Object.keys(props));
  // console.log("OnePost   Object props.post : ", Object.keys(props.post));
  // console.log("OnePost   typeof props.post : ", typeof props.post);
  let post = props.post;
  const dispatch = useDispatch();
  const { myAccount } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  return (
    <div className={onePost.onePost}>
      <div className={onePost.higherImg}>
        <div className={onePost.logoId}>
          <img src={element.profilePhoto} />
          <div
            onClick={() => dispatch(changeCurrentAccount(element.id))}
            className={onePost.id}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/account">
              {element.id}
            </Link>
          </div>
        </div>
        <div>
          <img src={stateConst.image.instProfilePage.threeDot} />
        </div>
      </div>
      <img src={`${element.post.image}`} />
      <div className={onePost.wrapUnderPhoto}>
        <div className={onePost.lcsSave}>
          <div className={onePost.likeCommentShare}>
            <img
              onClick={() =>
                dispatch(
                  like({
                    accountsIndex: element.accountsIndex,
                    postIndex: element.postIndex,
                  })
                )
              }
              src={stateConst.image.instProfilePage.like2}
            />
            <img src={stateConst.image.instProfilePage.comment} />
            <img src={stateConst.image.instProfilePage.share} />
          </div>
          <div className={onePost.save}>
            <img src={stateConst.image.instProfilePage.save} />
          </div>
        </div>
        <div className={onePost.countLike}>
          {element.post.likesss} ypodoban
          {/* {element.post.likes.length !== 0 &&
            element.post.likes.length + " " + "ypodoban"} */}
        </div>
      </div>
    </div>
  );
};

export default OnePost;
