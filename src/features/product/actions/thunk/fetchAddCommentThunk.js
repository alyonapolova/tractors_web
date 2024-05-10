import { postComment } from '../../../../api/comments';
import { fetchCommentsThunk } from './fetchCommentsThunk';

export const fetchAddCommentThunk = (newComment) => async (dispatch) => {
  await postComment(newComment);
  dispatch(fetchCommentsThunk(newComment.productId));
};
