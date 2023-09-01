import { createSlice } from '@reduxjs/toolkit';

const FILTER = 'filter';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: FILTER,
  initialState,
  reducers: {
    setFilter: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;

export const selectFilter = state => state.filter.filter;
