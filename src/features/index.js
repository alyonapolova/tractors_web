import { combineReducers } from 'redux';
import { userSlice } from './user/userSlice';
import { productListSlice } from './productList/productListSlice';
import { productSlice } from './product/productSlice';

export const rootReducer = combineReducers({
  user: userSlice,
  productList: productListSlice,
  product: productSlice,
});
