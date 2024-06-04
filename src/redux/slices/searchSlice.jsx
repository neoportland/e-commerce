/* eslint-disable no-unused-vars */
import React from "react";
import { createSlice } from '@reduxjs/toolkit'
 


   
const getStorage=()=>{
    if(localStorage.getItem("basket"))
    return  JSON.parse(localStorage.getItem("basket"))
      
    else{
    return []   
   } 
  
     }


const initialState = { // burası stateti temsi ediyor
  products: getStorage(),
  
};

 
const products2=[  
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
]

export const searchingSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    searching:(state ,action)=>{

    }
      

 } })

  export const {searching} = searchingSlice.actions 

 export default searchingSlice.reducer;
