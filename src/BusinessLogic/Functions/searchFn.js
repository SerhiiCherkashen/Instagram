// import {axios} from
// const axios = require("axios");
import axios from "axios";

const url1 = "https://randomfox.ca/floof/";
async function searchFn() {
  // await
}

export const axiosFn = async function () {
  let result = await axios
    .get(url1)
    .then((response) => {
      console.log("TRUE fetching data:", response.data.image); // Выводим данные, полученные с сервера
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
export const fetchData = async () => {
  try {
    // Выполнение GET запроса
    const response = await axios.get(url1);
    return response.data;
    // console.log("Trtue fetching data:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
