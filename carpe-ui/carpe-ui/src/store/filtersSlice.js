import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pickup: '',
  destination: '',
  timein: '',
  timeout: '',
  cost: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPickup: (state, action) => {
      state.pickup = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTimein: (state, action) => {
      state.timein = action.payload;
    },
    setTimeout: (state, action) => {
      state.timeout = action.payload;
    },
    setCost: (state, action) => {
      state.cost = action.payload;
    },
    resetFilters: (state) => {
      state.pickup = '';
      state.destination = '';
      state.timein = '';
      state.timeout = '';
      state.cost = '';
    },
  },
});

export const {
  setPickup,
  setDestination,
  setTimein,
  setTimeout,
  setCost,
  resetFilters,
} = filtersSlice.actions;

export const selectFilters = (state) => state.filters;

export default filtersSlice.reducer;
