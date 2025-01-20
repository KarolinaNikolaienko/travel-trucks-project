import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTruckByIdApi, getTrucksApi } from "../api/trucks-api";

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

export const fetchTruckById = createAsyncThunk(
  "trucks/fetchById",
  async (id, thunkAPI) => {
    try {
      const data = await getTruckByIdApi(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
