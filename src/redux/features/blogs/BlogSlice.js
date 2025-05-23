import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogs } from "./BlogThunk";

const  initialState={
    blogs: [],
    loading: false,
    error: null,
  }
export const blogSlice=createSlice({
    name:blogs,
     initialState,

     reducers:{},
     extraReducers:()=>{}
})