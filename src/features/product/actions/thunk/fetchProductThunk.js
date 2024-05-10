import { getProductById } from '../../../../api/products';
import { fetchProductSuccess } from '../fetchProductSuccess';

export function fetchProductThunk(id) {
  return async function (dispatch) {
    const product = await getProductById(id);
    dispatch(fetchProductSuccess(product));
  };
}
