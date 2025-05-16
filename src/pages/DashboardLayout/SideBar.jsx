import React, { useEffect } from 'react'

import './SideBar.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoggedInUser } from '../../redux/features/UsersDetails/UserSlice';

const SideBar = () => {
  const me = useSelector((store) => store.user.userDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLoggedInUser());
  }, [dispatch]);
  return (
    <>
    <div className='sidebar' >
     <div className='sidebar-header'>
      <img src={me?.avatar_url} alt=""  style={{width:'40px',height:"60px", borderRadius:"50%",objectFit:'cover' ,margin:'1px'}}/>
        <h3> hello {me?.full_name}</h3>
     </div>
     <ul className='sidebar-menu'>
        <li><Link to="/dashboard/profile">Profile Settings</Link></li>
        <li><Link to="/dashboard/orders">My Orders</Link></li>
        <li>
          <Link to="/dashboard/wishlist">My Wishlist</Link>
        </li>
        <li>Orders</li>
        <li>Address</li>
     </ul>
    </div>
    </>
  )
}

export default SideBar
