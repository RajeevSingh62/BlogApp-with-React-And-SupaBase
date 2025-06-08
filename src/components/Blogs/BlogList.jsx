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
    <>
      <div
        style={{
          padding: "20px",
          maxWidth: "100%",
          backgroundColor: "skyblue",
        }}
      >
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>
          {" "}
          Ours Latest Blogs
        </h1>
        <p
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
            fontFamily: "Arial, sans-serif",
            fontSize: "20px",
            color: "#333",
          }}
        >
          Welcome to our blog section! Here, you will find the latest articles
          and insights on various topics. Stay updated with our latest posts and
          feel free to explore!
        </p>
        <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          Our blog is designed to provide you with valuable information and
          engaging content. Whether you're looking for tips, tutorials, or just
          some interesting reads, we've got you covered. Happy reading!
        </p>
      </div>
      <div
        style={{ padding: "40px 20px", maxWidth: "1420px", margin: "0 auto" }}
      >
        {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
        {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
          }}
        >
          {blogs?.map((blog) => (
            <div
              key={blog.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              {blog.image_url && (
                <img
                  src={blog.image_url}
                  alt={blog.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              )}

              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    marginBottom: "8px",
                    color: "#222",
                  }}
                >
                  {blog.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#888",
                    marginBottom: "12px",
                  }}
                >
                  {new Date(blog.created_at).toLocaleDateString()}
                </p>
                <p
                  style={{ fontSize: "15px", color: "#555", lineHeight: "1.5" }}
                >
                  {blog.content.slice(0, 140)}...
                </p>
                <Link
                  to={`/blogs/${blog.id}`}
                  style={{
                    display: "inline-block",
                    marginTop: "16px",
                    padding: "8px 14px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
