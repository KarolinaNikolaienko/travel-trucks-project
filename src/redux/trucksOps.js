import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTrucksApi } from "../api/trucks-api";

export const fetchTrucks = createAsyncThunk(
  "trucks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const data = await getTrucksApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
