/* eslint-disable no-unused-vars */
import React, { act } from "react";
import {
  asyncThunkCreator,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = { // burası stateti temsi ediyor
  products: [],
  selectedProduct:{}, // detay sayfasında görünen pruduct
  loading: false, // loading durumuna göre özel bir materaila ui kütüphanesi ile bekleme efekti yapıyoruz 
  value: 20,
};

//  let base_url="https://fakestoreapi.com";     

export const getAllProducts = createAsyncThunk("getAllProducts", async () => { // burdan dönen değerleri aşağıda builder.addCase ile yakalıyoruz. yakaladığında ise statee ata . şimdi senin elinde 
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
  
});

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

export const products = createSlice({
  name: "product",
  initialState,
  reducers: {
        setSelectedProduct:(state, action)=>{ // seni çağıran sana bir değer verip  anlık bir ürün bilgisi kayıt edicek 
           state.selectedProduct=action.payload
 
    },

    filterProduct:(state, action)=>{  
    
      state.products=action.payload
      
        
                                      

    }
                                          

   

  },
  extraReducers: (builder) => { // koda karışık görünebilir ama önemli değil sonuçta bu şekilde programlanması için dizayn edilmiş
    builder.addCase(getAllProducts.pending, (state) => { // 
      state.loading = false;
  
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
       
    });
  },
});

// Action creators are generated for each case reducer function
  export const {setSelectedProduct, filterProduct} = products.actions

export default products.reducer;
