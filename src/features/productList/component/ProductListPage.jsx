import { useEffect } from 'react';
import { Page } from '../../../layout/Page';
import { ProductList } from './ProductList';
import { usePageTitle } from '../../../context/PageTitle';
import { getProducts } from '../../../api/products';
import { useDispatch } from 'react-redux';
import { fetchProductListSuccess } from '../actions/fetchProductListSuccess';
import { fetchProductListThunk } from '../actions/thunk/fetchProductListThunk';

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
