import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk("data/fetchDataServer", async () => {
  const { data } = await axios.get(
    "https://65a93323219bfa371868c106.mockapi.io/Sushi"
  );
  return data;
});

const initialState = {
  dataFromServer: [],
  status: "loading",
};

const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData(state, action) {
      state.dataFromServer = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      console.log("Loading");
      state.status = "loading";
      state.dataFromServer = [];
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      console.log("loaded");
      state.status = "success";
      state.dataFromServer = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      console.log("ERROR");
      state.status = "error";
      state.dataFromServer = [];
    });
  },
});
export const { setData } = DataSlice.actions;
export default DataSlice.reducer;
