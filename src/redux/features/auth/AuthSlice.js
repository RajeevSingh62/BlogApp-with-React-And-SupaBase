import {createSlice} from '@reduxjs/toolkit'
import { loginUser, registerUser } from './AuthThunks';

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  };

const authSlice=createSlice({
    name:'auth',
    initialState,
   reducers:{
    logout:(state)=>{
        state.user=null
        localStorage.removeItem('user');
    },
    setUserFromLocalStorage: (state, action) => {
      state.user = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setUserFromLocalStorage } = authSlice.actions;
export default authSlice.reducer;