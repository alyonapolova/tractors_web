import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/products';
import { usePageTitle } from '../context/PageTitle';

export const useProduct = () => {
  const params = useParams();
  const [productData, setProductData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const title = usePageTitle();

  useEffect(() => {
    if (productData !== null) {
      title.setTitle(productData.name);
    }
  }, [productData]);

  useEffect(() => {
    getProductById(params.productId)
      .then((data) => {
        setProductData(data);
      })
      .catch(() => {
        setNotFound(true);
      });
  }, [params.productId]);

  return { productData, notFound };
};
