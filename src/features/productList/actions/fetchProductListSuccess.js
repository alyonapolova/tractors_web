import { productListActionTypes } from './actionTypes';

export const fetchProductListSuccess = (list) => ({
  type: productListActionTypes.FETCH_SUCCESS,
  payload: list,
});
