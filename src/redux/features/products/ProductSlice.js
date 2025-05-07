

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
 
      return data;
    }
  );

  export const getProduct = createAsyncThunk(
    'products/getProduct',
    async (productId, { rejectWithValue }) => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .single(); // Ensures only one object is returned
  
      if (error) return rejectWithValue(error.message);
      console.log('categorey data', data);  
      return data;
    }
  );


  

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    product:null,
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

      // handling products by id is here 
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

   


  },
})

export default productsSlice.reducer
