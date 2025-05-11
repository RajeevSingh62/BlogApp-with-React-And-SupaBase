import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import{fetchProducts} from "../redux/features/products/ProductSlice"
import { useDispatch, useSelector } from 'react-redux'


const ProductCard = () => {

  const navigate=useNavigate()
  const dispatch=useDispatch();


const data=useSelector((state)=>state.products.products);
console.log("data",data)
const setserachterm=useSelector((store)=>store.products.serachTerm)

const filteredData=data?.filter((item)=>item?.name?.toLowerCase().includes(setserachterm?.toLowerCase() || ''))

useEffect(()=>{
dispatch(fetchProducts())
},[dispatch])

  return  (
    <div style={{
      marginTop: '40px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {filteredData?.map((product) => (
        <div key={product.id} style={{
          width: '250px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          backgroundColor: '#fff',
        }}>
          <img 
            src={product.image_url}
            alt="Product" 
            style={{ 
              width: '100%', 
              height: '150px', 
              objectFit: 'cover',
              borderRadius: '4px'
            }} 
          />
          <h3 style={{ margin: '12px 0 8px 0', fontSize: '18px' }}>{product.name}</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>{product.description}</p>
          <p style={{ fontWeight: 'bold', marginTop: '10px' }}>₹{product.price.toLocaleString('en-In')}</p>
          <button style={{
            marginTop: '12px',
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'

          }}
         onClick={()=>navigate(`/productdetails/${product.id}`)}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard