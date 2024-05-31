import { createSlice } from '@reduxjs/toolkit'

   const getStorage=()=>{
  if(localStorage.getItem("basket"))
  return  JSON.parse(localStorage.getItem("basket"))
    
  else{
  return []   
 } 

   }
       const initialState = {
       orderProduct:getStorage(), // sipariş sepetteki ürünler 
       totalPrice:0,
                                     
}

const sentStorage =(event)=>{               
  localStorage.setItem("basket",JSON.stringify(event)) 
   
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {

    deleteProduct:(state,action)=>{
      
          
        const deletedByid=state.orderProduct && state.orderProduct.filter((product)=>product.id!=action.payload)
        state.orderProduct=deletedByid // 
        localStorage.removeItem("basket")
        

        sentStorage(deletedByid)
    


    },

         totalCalculater:(state)=>{
          let result=0;
            state.orderProduct && state.orderProduct.map((product)=>{
                                   result+= product.price*product.count

          })

           state.totalPrice=result
       
        },
         

          addProductQuantity:(state,action)=>{
     
          
         const findProduct=state.orderProduct && state.orderProduct.find((produc)=> produc.id==action.payload.id) // ürün işaretlendi 

         if(findProduct){
          const excractedProduct=state.orderProduct.filter((produc)=>produc.id!=action.payload.id) 
          findProduct.count+=action.payload.count, // eski ürünün countu ile yeni ürünün countunu topla 
          state.orderProduct=[...excractedProduct, findProduct] // sipariş listesini toparla 
          sentStorage(state.orderProduct) // yeni oluşan listeyi local e gönder 
         
                  
         }
        else{
           state.orderProduct=[...state.orderProduct, action.payload]
           sentStorage(state.orderProduct)
                     
        }
    },
  },
})

 
 export const { addProductQuantity, deleteProduct, totalCalculater} = basketSlice.actions

export default basketSlice.reducer


 