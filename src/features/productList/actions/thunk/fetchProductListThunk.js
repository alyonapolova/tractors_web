import { getProducts } from '../../../../api/products';
import { fetchProductListSuccess } from '../fetchProductListSuccess';

export function fetchProductListThunk() {
  return async function (dispatch, getState) {
    const productList = await getProducts();
    dispatch(fetchProductListSuccess(productList));
  };
}
