import { UserActionTypes } from './actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  isLogginDialogOpen: false,
};

export const userSlice = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.OPEN_DIALOG: {
      return { ...state, isLogginDialogOpen: true };
    }
    case UserActionTypes.CLOSE_DIALOG: {
      return { ...state, isLogginDialogOpen: false };
    }
    case UserActionTypes.LOGIN: {
      if (action.payload.password === 'admin') {
        return { ...state, isLoggedIn: true, isLogginDialogOpen: false };
      }
      return state;
    }
    case UserActionTypes.LOGOUT: {
      return { ...state, isLoggedIn: false };
    }
    default:
      return state;
  }
};

export function selectorIsLogginDialogOpen(state) {
  return state.user.isLogginDialogOpen;
}
