import { TableCell, TableRow } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const ProductListRow = ({ row }) => {
  const navigate = useNavigate();
  const url = `/product/${row.id}`;

  const handleClick = () => {
    navigate(url);
  };

  return (
    <TableRow onClick={handleClick}>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.price}</TableCell>
      <TableCell>{row.quantity}</TableCell>
    </TableRow>
  );
};

ProductListRow.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
