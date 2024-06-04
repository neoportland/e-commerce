import { configureStore } from '@reduxjs/toolkit'
import products from "../redux/slices/products"
import basketSlice from "../redux/slices/basketSlice"
import searchSlice from './slices/searchSlice'
 

export const store = configureStore({
  reducer: {

    product:products,
    basket:basketSlice,
    search:searchSlice
  },
})