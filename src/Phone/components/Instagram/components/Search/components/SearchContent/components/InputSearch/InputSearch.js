import React from "react";
import inputS from "./InputSearch.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearchInput,
  clickSearchInput,
  fetchData,
} from "../../../../../../../../../BusinessLogic/Redux/SearchSlice";

const InputSearch = () => {
  const dispatch = useDispatch();
  const { input } = useSelector((state) => state.searchReducer);
  return (
    <div className={inputS.inputS}>
      <input
        onClick={() => dispatch(clickSearchInput())}
        onChange={(e) => dispatch(changeSearchInput(e))}
        value={input.value}
      />
      <button
        onClick={() => {
          dispatch(fetchData(input.value));
        }}>
        Search
      </button>
    </div>
  );
};

export default InputSearch;
