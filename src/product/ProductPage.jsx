import { Grid } from '@mui/material';
import { Page } from '../layout/Page';
import { useProduct } from './useProduct';
import { ProductInfo } from './ProductInfo';
import { CommentsPanel } from './CommentsPanel';
import { Clock } from '../Clock';

export const ProductPage = () => {
  const { productData, notFound } = useProduct();

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
      <Page>{content}</Page>;
    </>
  );
};
