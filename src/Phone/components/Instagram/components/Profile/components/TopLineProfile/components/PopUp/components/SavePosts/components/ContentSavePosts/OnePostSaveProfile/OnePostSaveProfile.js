import React from "react";
import onePSP from "./OnePostSaveProfile.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { stateConst } from "../../../../../../../../../../../../../../BusinessLogic/State/StateConst";
import {
  changeCurrentAccount,
  like,
  likeDoubleClick,
  save,
} from "../../../../../../../../../../../../../../BusinessLogic/Redux/PhoneSlice";

const OnePostSaveProfile = (props) => {
  const dispatch = useDispatch();
  let count = 0;
  let element = props.element;
  //   console.log("OnePostSaveProfile   element : ", element);
  const { myAccount, accounts } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  const { main } = useSelector((state) => state.phoneReducer);

  let account = accounts[element.accountIndex];
  let indexAvailable = account.posts[element.postIndex].likes.findIndex(
    (el) => {
      return el === myAccount.id;
    }
  );
  let stateSave = myAccount.savePosts.map((iter) => {
    return iter.postIndex === element.postIndex;
  });
  if (stateSave !== -1) {
    stateSave = true;
  } else if (stateSave !== "undefined") {
    stateSave = false;
  }

  //   console.log("OnePostSaveProfile stateSave", stateSave);

  return (
    <div className={onePSP.onePSP}>
      <h1>onePSP</h1>
      <div className={onePSP.higherImg}>
        <div className={onePSP.logoId}>
          <img src={account.profilePhoto} />
          <div
            onClick={() => dispatch(changeCurrentAccount(account.id))}
            className={onePSP.id}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/account">
              {/* {element.id} //----- */}
              {account.id}
            </Link>
          </div>
        </div>
        <div>
          <img src={stateConst.image.instProfilePage.threeDot} />
        </div>
      </div>
      {/*  */}
      <div className={onePSP.wrapLike}>
        {main.stateLikeDoubleClick && (
          <img
            className={onePSP.likeDoubleClick}
            src={stateConst.image.instProfilePage.like1}
          />
        )}

        <img
          onClick={() => {
            if (count === 1) {
              dispatch(likeDoubleClick());
              dispatch(
                like({
                  accountsIndex: element.accountIndex,
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
      </div>
      {/*  */}
      <div className={onePSP.wrapUnderPhoto}>
        <div className={onePSP.lcsSave}>
          <div className={onePSP.likeCommentShare}>
            <div
              onClick={() => {
                console.log("LIke CLICK 1 : ", element.accountIndex);
                console.log("LIke CLICK 2: ", element.postIndex);
                dispatch(
                  like({
                    accountsIndex: element.accountIndex,
                    postIndex: element.postIndex,
                  })
                );
              }}>
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
          <div className={onePSP.save}>
            <img
              onClick={() =>
                dispatch(
                  save({
                    stateSave: stateSave,
                    accountsIndex: element.accountIndex,
                    postIndex: element.postIndex,
                  })
                )
              }
              src={
                stateSave
                  ? stateConst.image.instProfilePage.save2
                  : stateConst.image.instProfilePage.save
              }
            />
          </div>
        </div>
        <div className={onePSP.countLike}>
          {accounts[element.accountIndex].posts[element.postIndex].likes.length}
          ypodoban
        </div>
      </div>
    </div>
  );
};

export default OnePostSaveProfile;
