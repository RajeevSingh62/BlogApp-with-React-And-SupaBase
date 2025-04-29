import {configureStore} from "@reduxjs/toolkit"
   import productsReducer from "../redux/features/products/ProductSlice"
import authSlice from "../redux/features/auth/AuthSlice"
export const store=configureStore({
  
   reducer:{
    products:productsReducer,
    auth:authSlice

   }
})

