import React, { useEffect } from "react";
import content from "./Content.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  firstFetchData,
  changeFirstSearch,
} from "../../../../../../../../../BusinessLogic/Redux/SearchSlice";
import { Link } from "react-router-dom";

const Content = () => {
  const dispatch = useDispatch();
  const { error, data, array, countFirstRender } = useSelector(
    (state) => state.searchReducer
  );

  // console.log("Content array /length : ", array, array[0].photos.length);

  useEffect(() => {
    {
      countFirstRender === 0 && dispatch(firstFetchData());
    }
  }, [dispatch]);
  return (
    <div className={content.content}>
      {error && <h1>Nevernyy Search</h1>}
      {data &&
        array[0].photos.map((element, index) => {
          console.log("Map search img");
          return (
            <div key={index + Date.now()} className={content.wrapImg}>
              <Link to="/searchRibbonWrap">
                <img src={element.src.large} />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Content;
