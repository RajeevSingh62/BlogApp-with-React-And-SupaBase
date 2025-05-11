import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import supabase from '../../../services/supabaseClient';


// export const fetchUsers = createAsyncThunk(
//     'Users/fetchUsers',
//     async () => {
//       const { data, error } = await supabase.from('users').select('*');
//       console.log("users data",data)
//       if (error) {
//         return rejectWithValue(error.message);
//       }
//       console.log("users data",data)
   
//       return data;
//     }
//   );

  export const fetchLoggedInUser = createAsyncThunk(
  'users/fetchLoggedInUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data: authData, error: authError } = await supabase.auth.getUser();
      if (authError) return rejectWithValue(authError.message);

      const userId = authData.user.id;

      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) return rejectWithValue(error.message);

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
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
      //   .addCase(fetchUsers.pending, (state) => {
      //     state.loading = true
      //     state.error = null
      //   })
      //   .addCase(fetchUsers.fulfilled, (state, action) => {
      //     state.loading = false
      //     state.products = action.payload
      //   })
      //   .addCase(fetchUsers.rejected, (state, action) => {
      //     state.loading = false
      //     state.error = action.error.message
      //   })
         .addCase(fetchLoggedInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLoggedInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload;
      })
      .addCase(fetchLoggedInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  
    },
  })
  
export default  userSlice.reducer;
  