import React, { useEffect } from 'react'
import {fetchCategories} from '../redux/features/products/CategoriesSlice'
import { useDispatch, useSelector } from 'react-redux'

const Categories = () => {

    const dispatch=useDispatch() 
    const CategoriesData=useSelector((state)=>state.Categories)
    console.log("categories data in component ",CategoriesData)

useEffect(()=>{         
      
    dispatch(fetchCategories())
},[dispatch])

return (
  <div style={{
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    gap: '20px',
    fontFamily: 'Arial, sans-serif',
  }}>
   
   {CategoriesData?.categories?.map((item)=>{
    return(
      <div key={item.id} style={{
        flex: '1 1 250px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        textAlign: 'center',
      }}>
       
       
        <img src={item.image} alt={item.name} style={{
          width: '100%',
          height: '6vh',
          borderRadius: '2px',
          marginTop: '10px'
        }} />
   <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{item.name}</h3>
      </div>
    )
   })}
    
  </div>
);
};

export default Categories;