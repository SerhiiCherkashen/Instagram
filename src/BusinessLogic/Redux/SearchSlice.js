import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { stateSearch } from "../State/StateSearch";
const url1 = "https://randomfox.ca/floof/";
const api_key = "tcmVmyV1O76gLUzm9uXSQzO6W28VYLJxfSZZ4MesOnUdjPyVomJbKOTo";

export const fetchData = createAsyncThunk(
  "search/fetchData",
  async (query, first) => {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${query}`,
      {
        headers: {
          Authorization: api_key,
        },
      }
    );
    return response.data;
  }
);

export const firstFetchData = createAsyncThunk("search/fetchData", async () => {
  const response = await axios.get(`https://api.pexels.com/v1/curated`, {
    headers: {
      Authorization: api_key,
    },
  });
  return response.data;
});

const state = stateSearch;
const searchSlice = createSlice({
  name: "search",
  initialState: state,
  reducers: {
    changeCount: (state) => {
      state.count += 10;
    },
    clickSearchInput: (state) => {
      state.input.value = "";
    },
    changeSearchInput: (state, action) => {
      state.input.value = action.payload.target.value;
    },
    changeFirstSearch: (state) => {
      state.countFirstRender = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.countFirstRender = 1;
        state.loading = false;
        state.data = action.payload;
        state.array = [];
        state.array.push(action.payload);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error.message;
      });
  },
});

export const {
  changeCount,
  clickSearchInput,
  changeSearchInput,
  changeFirstSearch,
} = searchSlice.actions;
export default searchSlice.reducer;
