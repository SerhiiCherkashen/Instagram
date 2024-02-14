import React from "react";
import choiceDP from "./ChoiceDescribePost.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../../../../../../../../BusinessLogic/Redux/PhoneSlice";
import { Link } from "react-router-dom";

const ChoiceDescribePost = () => {
  const dispatch = useDispatch();
  const { stateAccounts, addSelectedPhoto } = useSelector(
    (state) => state.phoneReducer
  );
  return (
    <div className={choiceDP.choiceDP}>
      <h1>ChoiceDescribePost</h1>
      <div className={choiceDP.currentPhoto}>
        <img src={addSelectedPhoto} />
      </div>
      <div className={choiceDP.InputText}>
        <input />
      </div>
      <div className={choiceDP.wrapDop}>
        <div className={choiceDP.extraOptions}>Додати розташування</div>
        <div className={choiceDP.extraOptions}>Позначити лбдей</div>
        <div className={choiceDP.extraOptions}>Аудиторiя</div>
        <div className={choiceDP.extraOptions}>Додати музику</div>
        <div className={choiceDP.extraOptions}>розширенi налаштування</div>
      </div>
      <div className={choiceDP.button}>
        <Link to="/">
          <button onClick={() => dispatch(addPost())}>Поширити</button>
        </Link>
      </div>
    </div>
  );
};

export default ChoiceDescribePost;
