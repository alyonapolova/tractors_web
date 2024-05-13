import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAddCommentThunk,
  fetchCommentsThunk,
  selectComments,
} from '../productSlice';
import { openLoginDialog, selectIsLoggedIn } from '../../user/userSlice';
import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

export const useComments = () => {
  const { productId } = useParams();

  const [newComment, setNewComment] = useState('');
  const comments = useSelector(selectComments);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchCommentsThunk(productId));
  }, [isLoggedIn]);

  const handleSubmit = () => {
    if (!isLoggedIn) {
      dispatch(openLoginDialog());
      return;
    }
    if (newComment.trim()) {
      dispatch(fetchAddCommentThunk({ productId, text: newComment }));
    }

    setNewComment('');
  };

  return { comments, handleSubmit, handleChange, newComment };
};
