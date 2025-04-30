import React from 'react'
import Home from './pages/Home'
import ProductCard from './components/ProductCard'
import RegistrationForm from './pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Profile from './components/Profile'
import AllUsers from './components/AllUsers'

const App = () => {




  return (
  <>
  <BrowserRouter>
 
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<ProductCard/>}/>
    <Route  path='/login'  element={<Login/>}/>
    <Route path='/register' element={<RegistrationForm/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/allusers' element={<AllUsers/>}/>

    <Route path='*' element={<h1>404 Not Found</h1>}/>

   
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
