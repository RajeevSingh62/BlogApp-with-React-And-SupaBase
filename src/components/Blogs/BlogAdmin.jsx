import React, { useEffect } from 'react'
import {fetchBlogs,deleteBlog} from '../../redux/features/blogs/BlogThunk'
import { useDispatch, useSelector } from 'react-redux';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const BlogAdmin = () => {


const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);
console.log("blogs admin", blogs)
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

 const handleDelete=(id)=>{
  if(window.confirm("Are you sure you want to delete this blog?")){
    dispatch(deleteBlog(id))
  }
 }
  
// Function to generate PDF

const exportPdf=()=>{
  const docs=new jsPDF();
    // Table headers
    const head= [['Sr. No.', 'Title', 'Author', 'Created At']];
    // Table data
    const data=blogs.map((blog,index)=>[
      index+1,
      blog.title,
      blog.author_id.full_name || 'unknown author',
      new Date(blog.created_at).toLocaleDateString()

    ]);
    autoTable(docs,{
      head:head,
      body:data,
    });
    docs.save('tableData.pdf');
}

  return (
    <div style={{ padding: '40px', maxWidth: '100%', margin: '0 auto' }}>
       <div ><button style={{backgroundColor:'lightblue',padding:"8px",cursor:"pointer"}} onClick={()=>exportPdf()}>export data</button></div>
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
          {blogs?.map((blog, index) => (
            <tr key={blog.id}>
              <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>{index + 1}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>{blog.title}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>{blog.author_id.full_name ||'unknown author'}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>{new Date(blog.created_at).toLocaleDateString()}</td>
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
                  onClick={() => handleDelete(blog.id)}

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
