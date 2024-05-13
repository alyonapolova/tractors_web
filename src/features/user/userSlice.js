import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isLogginDialogOpen: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    openLoginDialog: (state) => {
      state.isLogginDialogOpen = true;
    },
    closeLoginDialog: (state) => {
      state.isLogginDialogOpen = false;
    },
    login: (state, action) => {
      if (action.payload.password === 'admin') {
        state.isLoggedIn = true;
        state.isLogginDialogOpen = false;
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { openLoginDialog, closeLoginDialog, login, logout } =
  userSlice.actions;

export function selectorIsLogginDialogOpen(state) {
  return state.user.isLogginDialogOpen;
}

export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
