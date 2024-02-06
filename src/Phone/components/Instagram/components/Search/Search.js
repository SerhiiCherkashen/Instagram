import React from "react";
import search from "./Search.module.css";
import SearchContent from "./components/SearchContent/SearchContent";

const Search = () => {
  return (
    <div className={search.search}>
      <h1>Search</h1>
      <SearchContent />
    </div>
  );
};

export default Search;
