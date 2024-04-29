import { TableCell, TableRow } from '@mui/material';
import PropTypes from 'prop-types';

export const ProductListRow = ({ row }) => {
  return (
    <TableRow>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.price}</TableCell>
      <TableCell>{row.quantity}</TableCell>
    </TableRow>
  );
};

ProductListRow.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
