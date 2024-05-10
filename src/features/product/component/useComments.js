import { useDispatch, useSelector } from 'react-redux';
import { selectComments } from '../productSlice';
import { selectIsLoggedIn } from '../../user/userSlice';
import { fetchAddCommentThunk } from '../actions/thunk/fetchAddCommentThunk';
import { useParams } from 'react-router-dom';
import { openLoginDialog } from '../../user/actions/openLoginDialog';
import { useState } from 'react';

export const useComments = () => {
  const { productId } = useParams();

  const [newComment, setNewComment] = useState('');
  const comments = useSelector(selectComments);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  console.log(isLoggedIn);
  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = () => {
    if (!isLoggedIn) {
      dispatch(openLoginDialog());
      return;
    }
    if (newComment.trim()) {
      dispatch(fetchAddCommentThunk({ productId, text: newComment }));
    }
  };

  return { comments, handleSubmit, handleChange, newComment };
};
