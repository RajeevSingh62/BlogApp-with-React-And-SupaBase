import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Blogdetails = () => {
    const {id}=useParams()
    const navigate = useNavigate();
    console.log("here is blogdetails id ",id)
    const{blogs}=useSelector((state)=>state.blogs)
    const blog=blogs.find((b)=>b.id===id)
    console.log("blogs  details",blog)
return (
   <>
   
<button onClick={()=>navigate(-1)}
    style={{width:"80px",backgroundColor:" blue",color:"white"}}
    >back</button>
   
    <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      {blog.image_url && (
        <img
          src={blog.image_url}
          alt={blog.title}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "contain",
            marginBottom: "24px",
            borderRadius: "8px",
          }}
        />
      )}
      <h1>{blog.title}</h1>
      <p style={{ fontSize: "14px", color: "#888" }}>
        By {blog.author_id?.full_name || "Unknown Author"}  <br/> on {" "}
        {new Date(blog.created_at).toLocaleDateString()}
      </p>
      <div style={{ marginTop: "20px", fontSize: "16px", color: "#333" }}>
        {blog.content}

     

      </div>
    </div>
</>
  );
};

export default Blogdetails
