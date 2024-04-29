import { useEffect, useState } from 'react';
import { getComment } from '../api/comments';

export const useComments = (productId) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await getComment(productId);
    setComments(res);
  };

  useEffect(() => {
    fetchComments;
  }, [productId, fetchComments]);

  return { comments };
};
