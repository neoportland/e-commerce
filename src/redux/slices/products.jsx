/* eslint-disable no-unused-vars */
import React from "react";
import {
  asyncThunkCreator,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { // burası stateti temsi ediyor
  products: [],
  selectedProduct:{},
  loading: true,
  value: 20,
};

//  let base_url="https://fakestoreapi.com";     

export const getAllProducts = createAsyncThunk("getAllProducts", async () => { // burdan dönen değerleri aşağıda builder.addCase ile yakalıyoruz. yakaladığında ise statee ata . şimdi senin elinde 
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
  
});

export const products = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSelectedProduct:(state, action)=>{ // seni çağıran sana bir değer verip  anlık bir ürün bilgisi kayıt edicek 
      state.selectedProduct=action.payload

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
  export const {setSelectedProduct} = products.actions

export default products.reducer;
