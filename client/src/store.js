import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth';

const reducer = {
  auth: authSlice.reducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
