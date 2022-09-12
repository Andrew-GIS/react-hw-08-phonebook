import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isRefreshingUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isRefreshingUser = false;
    },
  },
});

export default authSlice;

// import { createSlice } from '@reduxjs/toolkit';
// import {
//   userRegistration,
//   userLogin,
//   userLogout,
//   refreshUser,
// } from './auth-operation';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   error: null,
//   refreshLoading: false,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [userRegistration.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//       state.error = null;
//     },
//     [userRegistration.rejected](state, action) {
//       state.error = action.payload;
//     },
//     [userLogin.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//       state.error = null;
//     },
//     [userLogin.rejected](state, action) {
//       state.error = action.payload;
//     },
//     [userLogout.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [refreshUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.refreshLoading = false;
//     },
//     [refreshUser.rejected](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//       state.refreshLoading = false;
//     },
//     [refreshUser.pending](state) {
//       state.refreshLoading = true;
//     },
//   },
// });