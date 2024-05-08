const initialState = {
  items: [],
};

export const productListSlice = (state = initialState, action) => {
  return state;
};

export const selectProductList = (state) => state.productList.items;
