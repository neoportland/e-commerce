import { configureStore } from '@reduxjs/toolkit'
import products from "../redux/slices/products"

export const store = configureStore({
  reducer: {

    product:products
  },
})