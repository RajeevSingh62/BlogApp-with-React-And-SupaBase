import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../redux/features/blogs/BlogThunk';
const MainBody = () => {




  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  return (
 <>
 <section style={{ padding: '60px 20px', textAlign: 'center'}}>
  <h1>Welcome to MyBlog</h1>
  <p>Discover stories, tutorials, and tech thoughts shared with passion.</p>
</section>
<section style={{ padding: '40px 20px' }}>
 
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
    {blogs?.slice(0,5).map(blog => (
      <div key={blog.id} style={{ width: '300px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
        <img src={blog.image_url} alt={blog.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
        <div style={{ padding: '15px' }}>
          <h3>{blog.title}</h3>
          <p>{blog.content.slice(0, 100)}...</p>
          <a href={`/blog/${blog.id}`} style={{ color: '#007bff' }}>Read More</a>
        </div>
      </div>
    ))}
  </div>
</section>


 </>
  )
}

export default MainBody
