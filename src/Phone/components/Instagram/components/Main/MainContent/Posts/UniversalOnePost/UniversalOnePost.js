import React from "react";
import universalOP from "./UniversalOnePost.module.css";
// import { stateConst } from "../../../../../../../../BusinessLogic/State/StateConst";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   changeCurrentAccount,
//   like,
//   likeDoubleClick,
// } from "../../../../../../../../BusinessLogic/Redux/PhoneSlice";
// import { Link } from "react-router-dom";

const UniversalOnePost = (props) => {
  //   let count = 0;
  //   let element = props.element;
  //   // console.log("OnePost   element : ", element);

  //   const dispatch = useDispatch();
  //   const { myAccount, accounts } = useSelector(
  //     (state) => state.phoneReducer.stateAccounts
  //   );
  //   const { main } = useSelector((state) => state.phoneReducer);

  //   let account = accounts[element.accountsIndex];
  //   let indexAvailable = account.posts[element.postIndex].likes.findIndex(
  //     (el) => {
  //       return el === myAccount.id;
  //     }
  //   );
  return (
    <div className={universalOP.universalOP}>
      <h1>UniversalOnePost</h1>
      <div className={universalOP.higherImg}>
        {/* <div className={onePost.logoId}>
          <img src={account.profilePhoto} />
          <div
            onClick={() => dispatch(changeCurrentAccount(account.id))}
            className={onePost.id}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/account">
              {account.id}
            </Link>
          </div>
        </div> */}
        {/* <div>
          <img src={stateConst.image.instProfilePage.threeDot} />
        </div> */}
      </div>
      {/* <div className={onePost.wrapLike}>
        {main.stateLikeDoubleClick && (
          <img
            className={onePost.likeDoubleClick}
            src={stateConst.image.instProfilePage.like1}
          />
        )}

        <img
          onClick={() => {
            if (count === 1) {
              dispatch(likeDoubleClick());
              dispatch(
                like({
                  accountsIndex: element.accountsIndex,
                  postIndex: element.postIndex,
                })
              );
              setTimeout(() => {
                dispatch(likeDoubleClick());
              }, 500);

              console.log("TWO CLICK");
            } else {
              setTimeout(() => {
                count = 0;
              }, 500);
            }
            count++;
          }}
          src={`${account.posts[element.postIndex].image}`}
        />
      </div> */}
      {/* <div className={onePost.wrapUnderPhoto}>
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
      </div> */}
    </div>
  );
};

export default UniversalOnePost;
