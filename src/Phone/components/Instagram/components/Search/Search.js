import React from "react";
import search from "./Search.module.css";
import SearchContent from "./components/SearchContent/SearchContent";

const Search = () => {
  return (
    <div className={search.search}>
      <SearchContent />
    </div>
  );
};

export default Search;
