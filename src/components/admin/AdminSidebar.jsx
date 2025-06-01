import React, { useEffect } from "react";
import { VscDashboard } from "react-icons/vsc";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LiaBlogSolid } from "react-icons/lia";
import { HiUsers } from "react-icons/hi";

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
              width: "auto",
              height: "160px",

              objectFit: "contains",
              margin: "1px",
            }}
          />

          <h3>
            {" "}
            {greetings} <br /> {me?.full_name}
          </h3>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/admindashboard" className="menu-link">
              <VscDashboard size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/createblogs" className="menu-link">
              <IoIosAddCircleOutline size={20} />
              <span>Add blogs</span>
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/blogadmin" className="menu-link">
              <LiaBlogSolid size={20} />
              <span>All blogs</span>
            </Link>
          </li>

          <li>
            <Link to="/admindashboard/allusers" className="menu-link">
              <HiUsers size={20} />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <span className="menu-link">Address</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
