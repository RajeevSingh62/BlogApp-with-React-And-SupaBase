import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoggedInUser } from "../../redux/features/UsersDetails/UserSlice";

const Profile = () => {
  const me = useSelector((store) => store.user.userDetails);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchLoggedInUser());
  // }, [dispatch]);

 

  return (
    <>
      <div style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '30px',
        // boxShadow: '0 0 15px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        fontFamily: 'Arial, sans-serif',
        // backgroundColor: '#f9f9f9'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#333'
        }}>Profile Settings</h2>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
          <img
            src={me?.avatar_url || 'https://via.placeholder.com/160' }
            alt="Avatar"
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              objectFit: 'cover',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              marginRight: '30px'
            }}
          />
          <div>
            <p style={{ fontSize: '18px', margin: '10px 0' }}>
            
              <strong>Name:</strong> {me?.full_name}

            </p>
            <p style={{ fontSize: '18px', margin: '10px 0' }}>
              <strong>Email:</strong> {me?.email}
            </p>
            <p style={{ fontSize: '18px', margin: '10px 0' }}>
              <strong>Role:</strong> {me?.role}
            </p>
            <p style={{ fontSize: '18px', margin: '10px 0' }}>
              <strong>Joined:</strong> {new Date(me?.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
