import { createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../../services/supabaseClient";

// Fetch all blogs
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*, author_id(full_name, avatar_url)")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
});

export const addblogs=createAsyncThunk(
  'blogs/addBlogs',
  async(blogForm)=>{
  const { data, error } = await supabase
    .from("blogs")
    .insert([blogForm])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
});
export const deleteBlog = createAsyncThunk(
  'blogs/deleteBlog',
  async (id, { rejectWithValue }) => {
    const { error } = await supabase
      .from("blogs")
      .delete()
      .eq("id", id);

    if (error) return rejectWithValue(error.message);
    return id; // returning deleted ID to remove it from Redux state
  }
);
