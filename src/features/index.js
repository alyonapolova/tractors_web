import { combineReducers } from 'redux';
import { userSlice } from './user/userSlice';

export const rootReducer = combineReducers({
  user: userSlice,
});
