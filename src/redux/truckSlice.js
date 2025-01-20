import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchTruckById, fetchTrucks } from "./trucksOps";

const initialState = {
  trucks: {
    items: [],
    isLoading: false,
    error: false,
  },
};

const trucksSlice = createSlice({
  name: "trucks",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucks.fulfilled, (state, { payload }) => {
        state.trucks.items = payload;
      })
      .addCase(fetchTruckById.fulfilled, (state, { payload }) => {
        state.trucks.items = payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.trucks.isLoading = false;
          state.trucks.error = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.trucks.isLoading = true;
          state.trucks.error = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.trucks.isLoading = false;
          state.trucks.error = payload;
        }
      );
  },
});

export const selecttrucks = (state) => state.trucks.trucks.items;
export const selectIsLoading = (state) => state.trucks.trucks.isLoading;
export const selectError = (state) => state.trucks.trucks.error;
// export const selectFilteredtrucks = createSelector(
//   [selecttrucks, selectNameFilter],
//   (trucks, filter) => {
//     const searchedtrucks = trucks.filter(
//       (contact) =>
//         contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//         contact.number.toLowerCase().includes(filter.toLowerCase())
//     );
//     return searchedtrucks;
//   }
// );
// export const { addContact, deleteContact } = trucksSlice.actions;
export const trucksReducer = trucksSlice.reducer;
