import React from "react";
import choicePhoto from "./СhoicePhoto.module.css";
import { useDispatch, useSelector } from "react-redux";
import { stateConst } from "../../../../../../../BusinessLogic/State/StateConst";
import { changeAddPhoto } from "../../../../../../../BusinessLogic/Redux/PhoneSlice";

const СhoicePhoto = () => {
  const dispatch = useDispatch();
  const { stateAccounts, addSelectedPhoto } = useSelector(
    (state) => state.phoneReducer
  );
  return (
    <div className={choicePhoto.choicePhoto}>
      {/* <h1>СhoicePhoto</h1> */}
      <div className={choicePhoto.currentPhoto}>
        <img src={addSelectedPhoto} />
      </div>
      <div className={choicePhoto.whiteLine}></div>
      <div className={choicePhoto.gallery}>
        {stateConst.addPhoto.map((element, index) => {
          return (
            <div
              onClick={() => dispatch(changeAddPhoto(index))}
              className={choicePhoto.wrapPhoto}>
              <img src={element.photo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default СhoicePhoto;
