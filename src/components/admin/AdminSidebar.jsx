import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoggedInUser } from "../../redux/features/UsersDetails/UserSlice";
import { greet } from "../../utils/Greetings";
const AdminSidebar = () => {
  const me = useSelector((store) => store.user.userDetails);
  const dispatch = useDispatch();
  const greetings = greet();

  useEffect(() => {
    dispatch(fetchLoggedInUser());
  }, [dispatch]);
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">
          <img
            src={me?.avatar_url}
            alt=""
            style={{
              width: "40px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
              margin: "1px",
            }}
          />
          <h3>
            {" "}
            {greetings} {me?.full_name}
          </h3>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/admindashboard/createblogs">add blogs</Link>
          </li>
          <li>
            <Link to="/addproduct">All blogs</Link>
          </li>
          <li>
            <Link to="/admindashboard/addproduct">Add products</Link>
          </li>
          <li>
            <Link to="/admindashboard/allusers">all users</Link>
          </li>
          <li>Address</li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
