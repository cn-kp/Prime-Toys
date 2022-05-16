import { createSlice } from '@reduxjs/toolkit';
import Auth from '../utils/auth';

const initialState = Auth.loggedIn();

export const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: initialState },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
