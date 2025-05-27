import React from 'react'
import {fetchBlogs} from '../../redux/features/blogs/BlogThunk'
import { useDispatch, useSelector } from 'react-redux';

const BlogAdmin = () => {

const {blogs}=useSelector((state) => state.blogs);


  
  const dummyBlogs = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      author: 'Rajeev Singh',
      createdAt: '2025-05-25',
    },
    {
      id: 2,
      title: 'Getting Started with Supabase',
      author: 'John Doe',
      createdAt: '2025-05-24',
    },
  ];

  return (
    <div style={{ padding: '40px', maxWidth: '100%', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Blog List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>Sr. No.</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>Title</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>Author</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>Created At</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {dummyBlogs.map((blog, index) => (
            <tr key={blog.id}>
              <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>{index + 1}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>{blog.title}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>{blog.author}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>{blog.createdAt}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>
                <button
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginRight: '10px',
                  }}
                >
                  Edit
                </button>
                <button
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default BlogAdmin
