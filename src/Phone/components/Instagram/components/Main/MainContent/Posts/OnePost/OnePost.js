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
  // console.log("OnePost   element : ", element);
  // console.log("OnePost   element : ", element.accountsIndex);
  // console.log("OnePost   element : ", element.postIndex);

  const dispatch = useDispatch();
  const { myAccount, accounts } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  let account = accounts[element.accountsIndex];

  // let indexAvailable = accounts[element.accountsIndex].posts[
  let indexAvailable = account.posts[element.postIndex].likes.findIndex(
    (el) => {
      return el === myAccount.id;
    }
  );
  // console.log("OnePost indexAvailable : ", indexAvailable);
  console.log("OnePost account : ", account);
  return (
    <div className={onePost.onePost}>
      <div className={onePost.higherImg}>
        <div className={onePost.logoId}>
          {/* <img src={element.profilePhoto} /> */}
          <img src={account.profilePhoto} />
          <div
            onClick={() => dispatch(changeCurrentAccount(account.id))}
            className={onePost.id}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/account">
              {/* {element.id} */}
              {account.id}
            </Link>
          </div>
        </div>
        <div>
          <img src={stateConst.image.instProfilePage.threeDot} />
        </div>
      </div>
      {/* <img src={`${element.post.image}`} /> */}
      <img src={`${account.posts[element.postIndex].image}`} />
      <div className={onePost.wrapUnderPhoto}>
        <div className={onePost.lcsSave}>
          <div className={onePost.likeCommentShare}>
            <div
              onClick={() =>
                dispatch(
                  like({
                    accountsIndex: element.accountsIndex,
                    postIndex: element.postIndex,
                  })
                )
              }>
              {indexAvailable !== -1 ? (
                <>
                  <img src={stateConst.image.instProfilePage.like1} />
                </>
              ) : (
                <img src={stateConst.image.instProfilePage.like3} />
              )}
            </div>
            <img src={stateConst.image.instProfilePage.comment} />
            <img src={stateConst.image.instProfilePage.share} />
          </div>
          <div className={onePost.save}>
            <img src={stateConst.image.instProfilePage.save} />
          </div>
        </div>
        <div className={onePost.countLike}>
          {
            accounts[element.accountsIndex].posts[element.postIndex].likes
              .length
          }
          ypodoban
        </div>
      </div>
    </div>
  );
};

export default OnePost;
