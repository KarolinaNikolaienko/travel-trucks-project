import { configureStore } from "@reduxjs/toolkit";
import { trucksReducer } from "./truckSlice";
// import { filtersReducer } from "./filtersSlice";

const rootReducer = {
  trucks: trucksReducer,
  //   filters: filtersReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
