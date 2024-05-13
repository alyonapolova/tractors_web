import { Grid } from '@mui/material';
import { Page } from '../../../layout/Page';
import { useProduct } from '../../../product/useProduct';
import { ProductInfo } from './ProductInfo';
import { CommentsPanel } from './CommentsPanel';
import { Clock } from '../../../Clock';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductThunk, selectProduct } from '../productSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ProductPage = () => {
  const notFound = false;
  const productData = useSelector(selectProduct);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchProductThunk(params.productId));

    return () => {
      // clear
    };
  }, [dispatch, params.productId]);

  let content;

  if (notFound) {
    content = 'Not found';
  } else if (productData === null) {
    content = 'Loading';
  } else {
    content = (
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ProductInfo product={productData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <CommentsPanel productId={productData.id} />
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <Clock />
      <Page>{content}</Page>
    </>
  );
};
