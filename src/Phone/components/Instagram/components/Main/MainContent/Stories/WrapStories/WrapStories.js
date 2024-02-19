import React from "react";
import wrapStories from "./WrapStories.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  chooseActiveIndexStories,
  firsClickStory,
} from "../../../../../../../../BusinessLogic/Redux/PhoneSlice";

const WrapStories = () => {
  const dispatch = useDispatch();
  const { stateAccounts } = useSelector((state) => state.phoneReducer);

  return (
    <div className={wrapStories.wrapStories}>
      {stateAccounts.accounts.map((element, index) => {
        if (element.stories.length > 0) {
          let status = element.stories.findIndex((element) => {
            return element.viewed === false;
          });

          if (status !== -1) {
            return (
              <div
                key={index + Date.now()}
                onClick={() => {
                  dispatch(firsClickStory());
                  dispatch(chooseActiveIndexStories(index));
                }}
                className={wrapStories.wrapStory}>
                <Link to="/oneStory">
                  <img
                    style={{ border: "5px solid red" }}
                    src={element.profilePhoto}
                  />
                </Link>
              </div>
            );
          } else {
            return (
              <div key={index + Date.now()} className={wrapStories.wrapStory}>
                <Link to="/oneStory">
                  <img src={element.profilePhoto} />
                </Link>
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default WrapStories;
