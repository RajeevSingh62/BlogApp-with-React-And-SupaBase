import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const DashboardLayout = () => {
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
        <SideBar />
        <div
          style={{
            flex: 1, 
            padding: "20px",
         
            width: "calc(95% - 250px)", 
           backgroundColor:"#f4f4f4",
          margin:"50px 50px"
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;