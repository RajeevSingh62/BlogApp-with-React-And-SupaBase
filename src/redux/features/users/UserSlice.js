import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../../../services/supabaseClient';

// 🔁 Thunk to fetch all users from Supabase
export const fetchAllUsers = createAsyncThunk(
  'users/fetchAllUsers',
  async () => {
    const { data, error } = await supabase.from('users').select('*');
    
    return data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
