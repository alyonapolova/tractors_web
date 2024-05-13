import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductById } from '../../api/products';
import { getComments, postComment } from '../../api/comments';

const initialState = {
  comments: [],
  info: null,
};

export const fetchProductThunk = createAsyncThunk(
  'product/fetchProductThunk',
  async (id) => {
    return await getProductById(id);
  }
);

export const fetchCommentsThunk = createAsyncThunk(
  'product/fetchCommentsThunk',
  async (id) => {
    return await getComments(id);
  }
);

export const fetchAddCommentThunk = createAsyncThunk(
  'product/fetchAddCommentThunk',
  async (newComment, thunkApi) => {
    await postComment(newComment);
    thunkApi.dispatch(fetchCommentsThunk(newComment.productId));
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearProduct: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductThunk.fulfilled, (state, action) => {
      state.info = action.payload;
    });
    builder.addCase(fetchCommentsThunk.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export const { clearProduct } = productSlice.actions;

export const selectComments = (state) => state.product.comments;
export const selectProduct = (state) => state.product.info;
