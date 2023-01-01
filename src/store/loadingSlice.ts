import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ELoading } from '../types/WeatherData';

const initialState = {
  loadStatus: ELoading.First,
};

const loadingSlice = createSlice({
  name: 'load',
  initialState,
  reducers: {
    setLoadStatus(state, action: PayloadAction<ELoading>) {
      state.loadStatus = action.payload;
    },
  },
});

export const { setLoadStatus } = loadingSlice.actions;
export default loadingSlice.reducer;
