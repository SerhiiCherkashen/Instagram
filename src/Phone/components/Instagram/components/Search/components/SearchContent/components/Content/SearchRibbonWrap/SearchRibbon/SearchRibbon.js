import React from "react";
import searchR from "./SearchRibbon.module.css";
import { useSelector } from "react-redux";
import SearchOnePost from "./SearchOnePost/SearchOnePost";

const SearchRibbon = () => {
  const { array } = useSelector((state) => state.searchReducer);
  console.log("LENGTH : ", array[0].photos.length);
  return (
    <div className={searchR.searchR}>
      {/* <h1>SearchRibbon</h1>; */}
      {array[0].photos.map((element, index) => {
        console.log("------------HYI-----------------------");
        return (
          <div key={index + Date.now()}>
            <SearchOnePost image={element.src.large} />
          </div>
        );
      })}
    </div>
  );
};

export default SearchRibbon;
