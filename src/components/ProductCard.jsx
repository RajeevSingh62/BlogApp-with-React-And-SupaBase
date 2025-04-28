import React from 'react'
import { useEffect } from 'react'
import { fetchProducts } from '../redux/features/products/ProductSlice'
import { useDispatch } from 'react-redux'

const ProductCard = () => {
const dispatch = useDispatch()
useEffect(()=>{
dispatch(fetchProducts())
},[])

  return (
    <div>
      products
    </div>
  )
}

export default ProductCard
