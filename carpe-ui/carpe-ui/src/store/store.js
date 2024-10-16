import { configureStore } from "@reduxjs/toolkit";
import poolReducer from "./poolSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    pools: poolReducer,   // pool slice
    filters: filtersReducer,    // filters slice
  },
});