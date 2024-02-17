import React, { useEffect } from "react";
import content from "./Content.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clickButton } from "../../../../../../../../../BusinessLogic/Redux/PhoneSlice";
import { axiosFn } from "../../../../../../../../../BusinessLogic/Functions/searchFn";
import axios from "axios";
import {
  axiosData,
  changeCount,
} from "../../../../../../../../../BusinessLogic/Redux/SearchSlice";

const Content = () => {
  const dispatch = useDispatch();
  const { redux, count, image } = useSelector((state) => state.searchReducer);
  const url1 = "https://randomfox.ca/floof/";

  console.log("count, redux.data", count, redux.data, redux.loading);
  // console.log("Object.keys(search) ", Object.keys(redux.data));
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Выполнение GET запроса
  //       const response = await axios.get(url1);
  //       console.log("Trtue fetching data:", response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   // Вызов функции для выполнения запроса
  //   fetchData();
  // }, []); // Пустой массив зависимостей означает, что эффект будет выполнен только при монтировании компонента

  useEffect(() => {
    dispatch(axiosData());
  }, [dispatch]);
  return (
    <div className={content.content}>
      <h1>Content</h1>
      <h1>{count}</h1>
      hyi
      <h1> {`   ${redux.loading} `} </h1>
      <h1> {`   ${redux.data} `} </h1>
      asd
      <img src={`${image}`} alt={"---"} />
      <button
        onClick={() => {
          // axiosFn();
          console.log("click");
          dispatch(axiosData());
          dispatch(changeCount());
          // dispatch(clickButton());
        }}>
        CLICK
      </button>
    </div>
  );
};

export default Content;
