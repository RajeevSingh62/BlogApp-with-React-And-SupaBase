import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminDashboard = () => {
   return (
    <>
      <div
        style={{
          display: "flex",
          padding: 0,
          margin: 0,
          minHeight: "100vh",
        }}
      >
        <AdminSidebar />
        <div
          style={{
            flex: 1, 
            padding: "20px",
         
            width: "calc(95% - 250px)", 
           backgroundColor:"#f4f4f4",
          margin:"20px 20px 0px 20px"
          }}
        >
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard
