import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth';
import conditionSlice from './slices/condition';

const reducer = {
  auth: authSlice.reducer,
  condition: conditionSlice.reducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
