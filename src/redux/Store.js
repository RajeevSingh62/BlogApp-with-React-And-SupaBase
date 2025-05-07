

import {configureStore} from "@reduxjs/toolkit"
   import productsReducer from "../redux/features/products/ProductSlice"
import authSlice from "../redux/features/auth/AuthSlice"
import usersReducer from "../redux/features/users/UserSlice"
import categoriesReducer from "../redux/features/products/CategoriesSlice"
export const store=configureStore({
  
   reducer:{
    products:productsReducer,
    auth:authSlice,
    users:usersReducer,
    Categories:categoriesReducer
   }
})


