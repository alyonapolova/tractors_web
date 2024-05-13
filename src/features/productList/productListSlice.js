import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../../api/products';

const initialState = {
  items: [],
};

export const fetchProductListThunk = createAsyncThunk(
  'productList/fetchProductListThunk',
  async () => {
    return await getProducts();
  }
);

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductListThunk.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const selectProductList = (state) => state.productList.items;
