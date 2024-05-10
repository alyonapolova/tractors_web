import { PlaylistAddOutlined } from '@mui/icons-material';
import { productActionTypes } from './actionTypes';

export const fetchProductSuccess = (product) => ({
  type: productActionTypes.FETCH_PRODUCT_SUCCESS,
  payload: product,
});
