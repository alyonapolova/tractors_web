import { productActionTypes } from './actionTypes';

export const fetchCommentsSuccess = (comments) => ({
  type: productActionTypes.FETCH_COMMENTS_SUCCESS,
  payload: comments,
});
