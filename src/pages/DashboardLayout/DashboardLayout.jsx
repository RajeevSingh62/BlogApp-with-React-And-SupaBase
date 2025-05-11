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
            flex: 1, // Take up remaining space
            padding: "20px",
            marginLeft: "250px", 
            width: "calc(100% - 250px)", // Ensure it fills the remaining width
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;