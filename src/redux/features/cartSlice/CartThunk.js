import { createSlice } from "@reduxjs/toolkit";

const initialState={
items:[],
isLoading:false,
error:null

}
const cartSlice=createSlice({
name:"cart",
initialState,


})