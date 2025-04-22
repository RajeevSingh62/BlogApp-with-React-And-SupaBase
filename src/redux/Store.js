import {configureStore} from "@reduxjs/toolkit"
   import productsReducer from "../redux/features/products/ProductSlice"
export const store=configureStore({
  
   reducer:{
    name:productsReducer
   }
})

