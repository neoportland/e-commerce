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
     

      console.log("basketSlice action:", action.payload)     
      console.log("basketSlice -> state.orderProduct:", state.orderProduct)     
       
      // aşağıdaki kod gelen eleman benim sipariş listemde arıyorum ve findProduct adlı değişkene atıyorum yoksa else çalışıyor

     
         const findProduct=state.orderProduct && state.orderProduct.find((produc)=> produc.id==action.payload.id)

         console.log("basketSlice-> findout :",findProduct)
         console.log("basketSlice->action.payload:", action.payload)
         if(findProduct){
          const excractedProduct=state.orderProduct.filter((produc)=>produc.id!=action.payload.id) // listeden  ürünü çıkar ürünün countunu güncelleyip öyle ekleme yapacağız. (yeni gelen ürünün count u farklı kopyası )
        
          findProduct.count+=action.payload.count, // eski ürünün countu ile yeni ürünün countunu topla 
          state.orderProduct=[...excractedProduct, findProduct] // sipariş listesini toparla 
          sentStorage(state.orderProduct) // yeni oluşan listeyi local e gönder 
         
                  
         }
        else{
          // state.orderProduct+=findProduct
           state.orderProduct=[...state.orderProduct, action.payload]
           sentStorage(state.orderProduct)
           
           
        }
      
      

      

    },

   
    
  },
})

 
 export const { addProductQuantity, deleteProduct, totalCalculater} = basketSlice.actions

export default basketSlice.reducer


 