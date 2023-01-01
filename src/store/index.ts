import { configureStore } from '@reduxjs/toolkit';
import { geodataAPI } from './geodataAPI';
import loadingSlice from './loadingSlice';
export const store = configureStore({
  reducer: {
    [geodataAPI.reducerPath]: geodataAPI.reducer,
    load: loadingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(geodataAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
