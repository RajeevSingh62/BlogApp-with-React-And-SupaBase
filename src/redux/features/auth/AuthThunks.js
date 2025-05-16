import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../../services/supabaseClient';

// src/features/auth/authThunks.
export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ email, password, fullName, role = 'user' }, { rejectWithValue }) => {
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { 
            data: { 
              full_name: fullName,
              role: role  // ➡️ Save role inside metadata
              // avatar_url: avatarUrl, // optional
            } 
          },
        });
  
        if (error) throw error;
  
        return data.user;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const updateUser=createAsyncThunk(
    'auth/updateUser',
    async ()=>{
      try {
        const{data,error}=await supabase.auth.updateUser({
          email,
          password,
          options: { 
            data: { 
              full_name: fullName,
              role: role  // ➡️ Save role inside metadata
              // avatar_url: avatarUrl, // optional
            } 
          },
        });
      } catch (error) {
        return (error.message)
      }
    }
  
   

  )

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      return data.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
