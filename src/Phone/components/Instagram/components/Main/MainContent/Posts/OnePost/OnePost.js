import React from "react";
import onePost from "./OnePost.module.css";
import { stateConst } from "../../../../../../../../BusinessLogic/State/StateConst";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentAccount,
  like,
  likeDoubleClick,
  mutedSwitch,
  mutedSwitchPost,
  save,
} from "../../../../../../../../BusinessLogic/Redux/PhoneSlice";
import { Link } from "react-router-dom";

const OnePost = (props) => {
  // console.log("OnePost      props  : ", props);

  let count = 0;
  const accountId = props.element.accountId;
  const postId = props.element.postId;

  const dispatch = useDispatch();
  const { stateAccounts, array, main } = useSelector(
    (state) => state.phoneReducer
  );
  const accounts = stateAccounts.accounts;
  const accountIndex = accounts.findIndex((element) => {
    return element.id === accountId;
  });
  const postIndex = accounts[accountIndex].posts.findIndex((element) => {
    return element.id === postId;
  });

  let indexAvailable = accounts[accountIndex].posts[postIndex].likes.findIndex(
    (el) => {
      return el === stateAccounts.myAccount.id;
    }
  );

  let stateSave = stateAccounts.myAccount.savePosts.findIndex((iter) => {
    // console.log(
    //   "OnePost  stateSave iter : ",
    //   iter.postId,
    //   "---",
    //   postId,
    //   iter.postId === postId
    // );
    return iter.postId === postId;
  });
  if (stateSave !== -1) {
    stateSave = true;
  } else {
    stateSave = false;
  }
  return (
    <div className={onePost.onePost}>
      {accounts[accountIndex].posts[postIndex].status === "video" ? (
        <>
          <div className={onePost.wrapHigherImgVideo}>
            <div className={onePost.higherImgVideo}>
              <div className={onePost.logoId}>
                <img src={accounts[accountIndex].profilePhoto} />
                <div
                  onClick={() =>
                    dispatch(changeCurrentAccount(accounts[accountIndex].id))
                  }
                  className={onePost.id}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/account">
                    {accounts[accountIndex].id}
                  </Link>
                </div>
              </div>
              <div>
                <img src={stateConst.image.instProfilePage.threeDot} />
              </div>
            </div>
          </div>
          <div className={onePost.wrapLike}>
            {main.stateLikeDoubleClick && (
              <img
                className={onePost.likeDoubleClick}
                src={stateConst.image.instProfilePage.like1}
              />
            )}
            {/*  */}
            <div className={onePost.video}>
              <video
                onClick={() => {
                  if (count === 1) {
                    dispatch(likeDoubleClick());
                    dispatch(
                      like({
                        accountIndex: accountIndex,
                        postIndex: postIndex,
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
                loop
                autoPlay={true}
                muted={accounts[accountIndex].posts[postIndex].muted}
                width="100%"
                height="auto">
                <source
                  src={accounts[accountIndex].posts[postIndex].video}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className={onePost.wrapSwitchSound}>
                <div
                  className={onePost.sound}
                  style={{ fontSize: "30px" }}
                  onClick={() =>
                    dispatch(mutedSwitchPost({ accountIndex, postIndex }))
                  }>
                  {accounts[accountIndex].posts[postIndex].muted ? (
                    <img src={stateConst.image.instProfilePage.soundOff} />
                  ) : (
                    <img src={stateConst.image.instProfilePage.sound} />
                  )}
                </div>
              </div>
            </div>
            {/*  */}
            {/* <img
              onClick={() => {
                if (count === 1) {
                  dispatch(likeDoubleClick());
                  dispatch(
                    like({
                      accountIndex: accountIndex,
                      postIndex: postIndex,
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
              src={`${accounts[accountIndex].posts[postIndex].image}`}
            /> */}
          </div>
        </>
      ) : (
        <>
          <div className={onePost.higherImg}>
            <div className={onePost.logoId}>
              <img src={accounts[accountIndex].profilePhoto} />
              <div
                onClick={() =>
                  dispatch(changeCurrentAccount(accounts[accountIndex].id))
                }
                className={onePost.id}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/account">
                  {accounts[accountIndex].id}
                </Link>
              </div>
            </div>
            <div>
              <img src={stateConst.image.instProfilePage.threeDot} />
            </div>
          </div>
          <div className={onePost.wrapLike}>
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
                      accountIndex: accountIndex,
                      postIndex: postIndex,
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
              src={`${accounts[accountIndex].posts[postIndex].image}`}
            />
          </div>
        </>
      )}

      {/*  */}
      <div className={onePost.wrapUnderPhoto}>
        <div className={onePost.lcsSave}>
          <div className={onePost.likeCommentShare}>
            <div
              onClick={() =>
                dispatch(
                  like({
                    accountIndex: accountIndex,
                    postIndex: postIndex,
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
            {/* <img src={stateConst.image.instProfilePage.save} /> */}
            {/*  */}
            <img
              onClick={() =>
                dispatch(
                  save({
                    accountId: accountId,
                    postId: postId,
                  })
                )
              }
              src={
                stateSave
                  ? stateConst.image.instProfilePage.save2
                  : stateConst.image.instProfilePage.save
              }
            />
            {/*  */}
          </div>
        </div>
        <div className={onePost.countLike}>
          {accounts[accountIndex].posts[postIndex].likes.length}
          ypodoban
        </div>
      </div>
    </div>
  );
};

export default OnePost;

// let account = accounts[element.accountIndex];
// let indexAvailable = account.posts[element.postIndex].likes.findIndex(
//   (el) => {
//     return el === myAccount.id;
//   }
// );
// return (
//   <div className={onePost.onePost}>
//     <div className={onePost.higherImg}>
//       <div className={onePost.logoId}>
//         {/* <img src={element.profilePhoto} /> */}
//         <img src={account.profilePhoto} />
//         <div
//           onClick={() => dispatch(changeCurrentAccount(account.id))}
//           className={onePost.id}>
//           <Link
//             style={{ textDecoration: "none", color: "black" }}
//             to="/account">
//             {/* {element.id} */}
//             {account.id}
//           </Link>
//         </div>
//       </div>
//       <div>
//         <img src={stateConst.image.instProfilePage.threeDot} />
//       </div>
//     </div>
//     <div className={onePost.wrapLike}>
//       {main.stateLikeDoubleClick && (
//         <img
//           className={onePost.likeDoubleClick}
//           src={stateConst.image.instProfilePage.like1}
//         />
//       )}

//       <img
//         onClick={() => {
//           if (count === 1) {
//             dispatch(likeDoubleClick());
//             dispatch(
//               like({
//                 accountIndex: element.accountIndex,
//                 postIndex: element.postIndex,
//               })
//             );
//             setTimeout(() => {
//               dispatch(likeDoubleClick());
//             }, 500);

//             console.log("TWO CLICK");
//           } else {
//             setTimeout(() => {
//               count = 0;
//             }, 500);
//           }
//           count++;
//         }}
//         src={`${account.posts[element.postIndex].image}`}
//       />
//     </div>
//     <div className={onePost.wrapUnderPhoto}>
//       <div className={onePost.lcsSave}>
//         <div className={onePost.likeCommentShare}>
//           <div
//             onClick={() =>
//               dispatch(
//                 like({
//                   accountIndex: element.accountIndex,
//                   postIndex: element.postIndex,
//                 })
//               )
//             }>
//             {indexAvailable !== -1 ? (
//               <>
//                 <img src={stateConst.image.instProfilePage.like1} />
//               </>
//             ) : (
//               <img src={stateConst.image.instProfilePage.like3} />
//             )}
//           </div>
//           <img src={stateConst.image.instProfilePage.comment} />
//           <img src={stateConst.image.instProfilePage.share} />
//         </div>
//         <div className={onePost.save}>
//           <img src={stateConst.image.instProfilePage.save} />
//         </div>
//       </div>
//       <div className={onePost.countLike}>
//         {accounts[element.accountIndex].posts[element.postIndex].likes.length}
//         ypodoban
//       </div>
//     </div>
//   </div>
// );
// };
