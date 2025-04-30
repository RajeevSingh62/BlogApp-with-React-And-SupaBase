import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/features/products/ProductSlice";
import usersReducer from "../redux/features/UsersDetails/UserSlice";
import authSlice from "../redux/features/auth/AuthSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authSlice,
    users: usersReducer,
  },
});
