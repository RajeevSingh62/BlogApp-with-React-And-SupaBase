import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../redux/features/users/UserSlice";

const AllUsers = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);


  console.log("selectors data", users.users);

 
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);


  // console.log("useer tttttt data ", users);



  return (
<>
  <h2 style={{ fontFamily: 'Arial, sans-serif', marginBottom: '20px' }}>All Users List</h2>

  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      fontFamily: 'Arial, sans-serif',
    }}
  >
    {users?.map((user, index) => (
      <div
        key={index}
        style={{
          display: 'flex',
          flexDirection: 'row',
          border: '1px solid #ccc',
          borderRadius: '10px',
          width: '450px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          overflow: 'hidden',
        }}
      >
        <img
          src={user.avatar_url}
          alt={user.avatar_url}
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
          }}
        />
        <div style={{ padding: '16px', flex: 1 }}>
          <p style={{ margin: '8px 0', fontWeight: 'bold' }}>👤 Username: {user.full_name}</p>
          <p style={{ margin: '8px 0' }}>📧 Email: {user.email}</p>
          <p style={{ margin: '8px 0' }}>🔐 Role: {user.role}</p>
          <p style={{ margin: '8px 0' }}>📅 Created At: {new Date(user.created_at).toLocaleString()}</p>
        </div>
      </div>
    ))}
  </div>
</>



    


  );
};

export default AllUsers;
