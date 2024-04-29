import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getProducts().then((res) => setProducts(res));
    }, 2000);
  }, []);
  return products;
};
