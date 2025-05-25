import React, { useEffect } from "react";
import { fetchBlogs } from "../../redux/features/blogs/BlogThunk";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogList = () => {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div style={{ padding: "40px 20px", maxWidth: "1100px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "32px", textAlign: "center" }}>Latest Blogs</h2>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {blogs?.map((blog) => (
          <div
            key={blog.id}
            style={{
              display: "flex",
              gap: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            {blog.image_url && (
              <img
                src={blog.image_url}
                alt={blog.title}
                style={{
                  width: "300px",
                  height: "200px",
                  objectFit: "contain",
                  
                  flexShrink: 0,
                }}
              />
            )}

            <div style={{ padding: "20px", flex: 1 }}>
              <h3 style={{ fontSize: "22px", marginBottom: "10px", color: "#333" }}>{blog.title}</h3>
              <p style={{ fontSize: "14px", color: "#777", marginBottom: "10px" }}>
                {new Date(blog.created_at).toLocaleDateString()}
              </p>
              <p style={{ fontSize: "16px", color: "#555" }}>
                {blog.content.slice(0, 140)}...

              </p>
                  <Link
                to={`/blogs/${blog.id}`}
                style={{
                  display: "inline-block",
                  marginTop: "16px",
                  padding: "8px 16px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  borderRadius: "4px",
                  textDecoration: "none",
                  fontSize: "14px"
                }}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
