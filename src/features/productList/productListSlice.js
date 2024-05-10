import { productListActionTypes } from './actions/actionTypes';

const initialState = {
  items: [],
};

export const productListSlice = (state = initialState, action) => {
  if (action.type === productListActionTypes.FETCH_SUCCESS) {
    return { items: action.payload.list };
  }
  return state;
};

export const selectProductList = (state) => state.productList.items;
