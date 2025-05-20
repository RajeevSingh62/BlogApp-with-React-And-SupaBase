// import { configureStore } from "@reduxjs/toolkit";
// import productsReducer from "../redux/features/products/ProductSlice";
// import authSlice from "../redux/features/auth/AuthSlice";
// import usersReducer from "../redux/features/users/UserSlice";
// import categoriesReducer from "../redux/features/products/CategoriesSlice";
// import userReducer from "../redux/features/UsersDetails/UserSlice";
// export const store = configureStore({
//   reducer: {
//     products: productsReducer,
//     auth: authSlice,
//     users: usersReducer,
//     Categories: categoriesReducer,
//     user: userReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk"; // ✅ Named import

import productsReducer from "../redux/features/products/ProductSlice";
import authSlice from "../redux/features/auth/AuthSlice";
import usersReducer from "../redux/features/users/UserSlice";
import categoriesReducer from "../redux/features/products/CategoriesSlice";
import userReducer from "../redux/features/UsersDetails/UserSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  auth: authSlice,
  users: usersReducer,
  Categories: categoriesReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // ✅ Only persist auth
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // optional: disables warnings from redux-persist
    }),
});

export const persistor = persistStore(store);
