import { useEffect } from 'react';
import { Page } from '../../../layout/Page';
import { ProductList } from './ProductList';
import { usePageTitle } from '../../../context/PageTitle';

export const ProductListPage = () => {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Product list');
  }, []);

  return (
    <Page>
      <ProductList />
    </Page>
  );
};
