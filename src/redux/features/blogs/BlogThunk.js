import { createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../../supabaseClient";

// Fetch all blogs
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*, author_id(full_name, avatar_url)")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
});