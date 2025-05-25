import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addblogs}from '../../redux/features/blogs/BlogThunk'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateBlogs = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();

const[blogForm,setBlogForm]=useState({
    title: "",
    content: "",
    image_url: "",
    author_id: "",

})
const handleChange=(e)=>{
setBlogForm((prev)=>({
    ...prev,
    [e.target.name]:e.target.value
}))
}

const handleSubmit=(e)=>{
     e.preventDefault();
     dispatch(addblogs(blogForm))
     toast('blog created ')
     navigate('/blogs')
 
}

   return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "0 auto" }}>
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <input
          type="text"
          name="title"
          value={FormData.title}
          onChange={handleChange}
          placeholder="Blog title"
          required
        />
        <textarea
          name="content"
          value={FormData.content}
            onChange={handleChange}
          placeholder="Content"
          rows="6"
          required
        />
        <input
          type="text"
          name="image_url"
             value={FormData.image_url}
               onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          type="text"
          name="author_id"
             value={FormData.author_id}
               onChange={handleChange}
          
          placeholder="Author ID"
        
        />
        <button type="submit" style={{ padding: "10px 20px" }}>Submit</button>
      </form>
    </div>
  );
};


export default CreateBlogs
