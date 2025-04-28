import React from 'react'
import supabase from '../services/supabaseClient'
import Navbar from '../components/Navbar'

const Home = () => {
    // console.log(supabase)
  return (
    <div>
      <Navbar/>
      Dashboard 
    </div>
  )
}

export default Home

