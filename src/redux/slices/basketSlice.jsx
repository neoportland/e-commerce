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
       productsCount:0

  // orderProduct:[{
  //   count:11,
  //   id:21,
  //   title:"sehpa",
  //   desciption:"loremalskdjfasdkfnadslkfnadskj ",
  //   image:"www.page.com "

  // }]
  
  // benim satın aldığım bütün ürünleri ekleyeceğim array. sayfa yenilendiğinde boşalmasın diye ben bu arayi localstorage.setItem olarak kaydedip sonra değerleri çekeceğim yere görndermek için yine localstorage den çekip basmak istediğim yere gönderebilirim . ilk yöntem olarak verileri direk burdan aldığımız için sayfa yenilendiğinde malesef ki veriler ekrana yansımıyordu. ama ben satın aldığım ürünler sepetini eğer ki local arana kaydedip çekersem bu sorun ortadan kalkar                                     

}

const sentStorage =(event)=>{               
  localStorage.setItem("basket",JSON.stringify(event)) 
   
}


 

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {

          addProductQuantity:(state,action)=>{
     

      console.log("basketSlice action:", action.payload)     
      console.log("basketSlice -> state.orderProduct:", state.orderProduct)     
       
      // aşağıdaki kod gelen eleman benim sipariş listemde arıyorum ve findProduct adlı değişkene atıyorum yoksa else çalışıyor

     
         const findProduct=state.orderProduct && state.orderProduct.find((produc)=> produc.id==action.payload.id)

         console.log("basketSlice-> findout :",findProduct)
         console.log("basketSlice->action.payload:", action.payload)
         if(findProduct){
          const excractedProduct=state.orderProduct.filter((produc)=>produc.id!=action.payload.id) // listeden  ürünü çıkar(yeni gelen ürünün count u farklı kopyası )
        
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

 
 export const { addProductQuantity} = basketSlice.actions

export default basketSlice.reducer


 