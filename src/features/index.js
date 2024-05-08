import { combineReducers } from 'redux';
import { userSlice } from './user/userSlice';
import { productListSlice } from './productList/productListSlice';

export const rootReducer = combineReducers({
  user: userSlice,
  productList: productListSlice,
});
