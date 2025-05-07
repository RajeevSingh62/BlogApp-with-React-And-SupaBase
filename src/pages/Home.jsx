import React from 'react'
import supabase from '../services/supabaseClient'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import AllUsers from '../components/AllUsers'
import ProductCard from '../components/ProductCard'
import Categories from '../components/Categories'

const Home = () => {
    // console.log(supabase)
  return (
    <div>
      <Navbar/>
      {/* <Profile/> */}
      {/* <AllUsers/> */}
      {/* <ProductCard/> */}
      <Categories/>
  
     
    </div>
  )
}

export default Home

