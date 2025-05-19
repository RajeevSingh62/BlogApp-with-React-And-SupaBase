import React from 'react'
import supabase from '../services/supabaseClient'
import Navbar from '../components/Navbar'

import AllUsers from '../components/AllUsers'
import ProductCard from '../components/ProductCard'
import Categories from '../components/Categories'
import AuthGuard from '../utils/AuthGuard'

const Home = () => {
    // console.log(supabase)
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Profile/> */}
      {/* <AllUsers/> */}
        <Categories/>
      <ProductCard/>

    
  
     
    </div>
  )
}

export default Home

