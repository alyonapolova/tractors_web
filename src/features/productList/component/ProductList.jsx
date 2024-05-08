import { Table, TableBody, TableContainer } from '@mui/material';
import { ProductListTableHead } from './ProductListTableHead';
import { ProductListRow } from './ProductListRow';
import { useSelector } from 'react-redux';
import { selectProductList } from '../productListSlice';

export const ProductList = () => {
  const products = useSelector(selectProductList);

  return (
    <TableContainer>
      {products.length === 0 && 'Loading'}
      <Table>
        <ProductListTableHead />
        <TableBody>
          {products.map((product) => (
            <ProductListRow key={product.id} row={product} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
