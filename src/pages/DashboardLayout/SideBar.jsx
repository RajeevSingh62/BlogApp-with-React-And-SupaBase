import React from 'react'

import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <>
    <div className='sidebar' >
     <div className='sidebar-header'>
        <h4>hi Rajeev singh</h4>
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
