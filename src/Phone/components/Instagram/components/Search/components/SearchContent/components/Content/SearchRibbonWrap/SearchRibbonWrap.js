import React from "react";
import searchRW from "./SearchRibbonWrap.module.css";
import SearchRibbon from "./SearchRibbon/SearchRibbon";
import TopLineSearchRibbon from "./TopLineSearchRibbon/TopLineSearchRibbon";

const SearchRibbonWrap = () => {
  return (
    <div className={searchRW.searchRW}>
      {/* <h1>SearchRibbonWrap</h1>; */}
      <TopLineSearchRibbon />
      <SearchRibbon />
    </div>
  );
};

export default SearchRibbonWrap;
