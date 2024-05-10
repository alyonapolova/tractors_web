import { productActionTypes } from './actions/actionTypes';

const initialState = {
  comments: [],
  info: null,
};

export function productSlice(state = initialState, action) {
  switch (action.type) {
    case productActionTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        info: action.payload,
      };
    case productActionTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
}

export const selectComments = (state) => state.product.comments;
export const selectProduct = (state) => state.product.info;
