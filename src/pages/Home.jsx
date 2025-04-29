import React from 'react'
import supabase from '../services/supabaseClient'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'

const Home = () => {
    // console.log(supabase)
  return (
    <div>
      <Navbar/>
      <Profile/>
      Dashboard 
    </div>
  )
}

export default Home

