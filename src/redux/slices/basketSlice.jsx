import { createSlice } from '@reduxjs/toolkit'
 
const initialState = {
  productsCount: 0,
  totalPrice:0,
  orderProduct:[]
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductQuantity:(state,action)=>{
      // console.log("action",action.payload[0]) // product'ın kendisi
      // console.log("action",action.payload[1]) // product adetedi
      state.orderProduct.push(action.payload[0])
      state.productsCount+=action.payload[1].count

      state.totalPrice=state.totalPrice+ (action.payload[1].count)*(action.payload[0].price)

      
      
      
      

    }
    
  },
})

 
 export const { addProductQuantity} = basketSlice.actions

export default basketSlice.reducer


 