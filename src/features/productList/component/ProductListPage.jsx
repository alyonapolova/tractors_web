import { useEffect } from 'react';
import { Page } from '../../../layout/Page';
import { ProductList } from './ProductList';
import { usePageTitle } from '../../../context/PageTitle';
import { useDispatch } from 'react-redux';
import { fetchProductListThunk } from '../productListSlice';

export const ProductListPage = () => {
  const { setTitle } = usePageTitle();
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle('Product list');
  }, []);

  useEffect(() => {
    dispatch(fetchProductListThunk());
  }, [dispatch]);

  return (
    <Page>
      <ProductList />
    </Page>
  );
};
