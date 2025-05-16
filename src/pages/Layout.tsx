import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'

export const Layout = () => {
    const location = useLocation();
    const authPaths = location.pathname.startsWith("/login") || location.pathname.startsWith("/register");
  return (
    <>
        {!authPaths ? <Navbar/> : <div>auth nav</div>}
        <Outlet/>
    </>
  )
}
