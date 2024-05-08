import { TableCell, TableHead, TableRow } from '@mui/material';

export const ProductListTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Price</TableCell>
        <TableCell>In stock</TableCell>
      </TableRow>
    </TableHead>
  );
};
