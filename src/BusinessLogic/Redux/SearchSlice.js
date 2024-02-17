import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { stateSearch } from "../State/StateSearch";
// const url1 = "https://randomfox.ca/floof/";

console.log("axiosData   response.data 0: ");
export const axiosData = createAsyncThunk("search/axiosData", async () => {
  // console.log("axiosData   response.data 000: ");
  const response = await axios.fetch("https://randomfox.ca/floof/");
  // console.log("axiosData   response.data 111: ", response.data);
  const data = await response.json();
  return data;
  // return response;
});
let a = axiosData();
console.log("axiosData   response.data axiosData 222: ", a);

console.log("axiosData   response.data 1: ");

const state = stateSearch;
const searchSlice = createSlice({
  name: "search",
  initialState: state,
  reducers: {
    changeCount: (state) => {
      state.count += 10;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(axiosData.pending, (state) => {
        state.search.redux.loading = true;
        state.search.redux.error = null;
      })
      .addCase(axiosData.fulfilled, (state, action) => {
        state.redux.loading = false;
        state.redux.data = action.payload;
        console.log("action.payload : ", action.payload);
      })
      .addCase(axiosData.rejected, (state, action) => {
        state.redux.loading = false;
        state.redux.error = action.error.message;
      });
  },
});

export const { changeCount } = searchSlice.actions;
export default searchSlice.reducer;
