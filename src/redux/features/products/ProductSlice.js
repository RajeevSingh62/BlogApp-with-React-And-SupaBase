

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
 import supabase from "../../../services/supabaseClient"

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const { data, error } = await supabase.from('products').select('*');
      console.log("products data",data)
      if (error) {
        return rejectWithValue(error.message);
      }
      console.log("products data",data)
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
      return data;
    }
  );
 
  

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default productsSlice.reducer
