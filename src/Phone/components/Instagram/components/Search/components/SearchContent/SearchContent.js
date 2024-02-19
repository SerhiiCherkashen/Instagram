import React from "react";
import searchC from "./SearchContent.module.css";
import InputSearch from "./components/InputSearch/InputSearch";
import Content from "./components/Content/Content";

const SearchContent = () => {
  return (
    <div className={searchC.searchC}>
      <InputSearch />
      <Content />
    </div>
  );
};

export default SearchContent;
