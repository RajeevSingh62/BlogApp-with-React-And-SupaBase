import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addblogs } from "../../redux/features/blogs/BlogThunk";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { fetchLoggedInUser } from "../../redux/features/UsersDetails/UserSlice";

const CreateBlogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const me = useSelector((store) => store.user.userDetails);

  // console.log("here is create user blog", me);
  useEffect(()=>{
   dispatch(fetchLoggedInUser());
  },[dispatch])
  const [selectedImage, setSelectedImage] = useState();

  const [blogData, setblogData] = useState({
    title: "",
    content: "",

    // author_id: me?.id,
  });
  const handleChange = (e) => {
    setblogData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    debugger
    e.preventDefault();
   console.log("here is blog data", blogData);
   console.log("here is selected image", selectedImage);
      if (!me?.id) {
    toast.error("User not loaded yet.");
    return;
  }
    dispatch(addblogs({ blogData: { ...blogData , author_id: me.id,}, imageFile: selectedImage }));
    toast("blog created ");
    navigate("/blogs");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", padding: "20px" }}> Add New Blog</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <input
          style={{ padding: "10px", fontSize: "16px" }}
          type="text"
          name="title"
          value={blogData.title}
          onChange={handleChange}
          placeholder="Blog title"
          required
        />
        <textarea
          style={{ padding: "10px", fontSize: "16px" }}
          name="content"
          value={blogData.content}
          onChange={handleChange}
          placeholder="Content"
          rows="6"
          required
        />
        <input
          type="file"
          accept="image/*"
          style={{ padding: "10px", fontSize: "16px" }}
          name="image_url"
          onChange={(e) => setSelectedImage(e.target.files[0])}
          placeholder="blog image "
        />
        <input
          type="text"
          style={{ padding: "10px", fontSize: "16px" }}
          name="author_id"
          value={me?.full_name}
          onChange={handleChange}
          disabled
          readOnly
          placeholder="Author ID"
        />
        <button type="submit" style={{ padding: "10px " }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlogs;
