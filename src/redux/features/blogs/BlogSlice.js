import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogs, addblogs,deleteBlog } from "./BlogThunk";

const  initialState={
    blogs: [],
    loading: false,
    error: null,
  }
const blogSlice=createSlice({
    name:"blogs",
     initialState,

     reducers:{},
     extraReducers:(builder)=>{
     builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
       .addCase (fetchBlogs.fulfilled,(state,action)=>{
        state.loading=false;
        state.blogs=action.payload;
       })
        .addCase (fetchBlogs.rejected ,(state)=>{
          state.loading=false;
          state.error=state.error.message;
        })
    
      .addCase( addblogs.fulfilled, (state, action) => {
        state.blogs.unshift(action.payload); 
      })
       
      .addCase(deleteBlog.fulfilled,(state,action)=>{

        state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
      })

     }
})
export default blogSlice.reducer;