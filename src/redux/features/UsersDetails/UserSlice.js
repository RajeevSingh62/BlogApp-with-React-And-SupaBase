import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit';


export const fetchUsers = createAsyncThunk(
    'Users/fetchUsers',
    async () => {
      const { data, error } = await supabase.from('users').select('*');
      console.log("users data",data)
      if (error) {
        return rejectWithValue(error.message);
      }
      console.log("users data",data)
   
      return data;
    }
  );

const initialState={
    userDetails:null,
    loading:false,
    error:null
}

const userSlice=createSlice({
    name :'users',
    initialState,
    reducers:{},
  extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.loading = false
          state.products = action.payload
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message
        })
    },
  })
  
export default  userSlice.reducer;
  