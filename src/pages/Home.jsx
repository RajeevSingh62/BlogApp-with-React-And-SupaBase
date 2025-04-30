import React from 'react'
import supabase from '../services/supabaseClient'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import AllUsers from '../components/AllUsers'

const Home = () => {
    // console.log(supabase)
  return (
    <div>
      <Navbar/>
      <Profile/>
      {/* <AllUsers/> */}
      Dashboard 
    </div>
  )
}

export default Home

