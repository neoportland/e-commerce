/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderShow from './OrderShow'
import { totalCalculater } from '../redux/slices/basketSlice'

const Order = () => {

  const dispatch= useDispatch()

    const {orderProduct,totalPrice}=useSelector((store)=>store.basket)
    
     console.log(" order.jsx sonuç", orderProduct)
    

    
    useEffect(()=>{
        dispatch(totalCalculater()) // totalPrice her defasında set edecek fonksiyonu çalıştır

    },[])


    


     
  return (
    <div >
      
<h2 style={{textAlign:"center", color:" #786858", marginBottom:"10px"}} >SİPARİŞ DETAYLARI </h2>
<header style={{display:"flex",  marginBottom:"15px" }}>
            <h3 style={{paddingRight:"756px", paddingLeft:"49px"}}> Ürün </h3>
            <h3> Fiyat </h3>

        </header>


          {
                   orderProduct.map((product, index)=>{

                return   <OrderShow key={index}   {...product}  />

        
               })
              
          }



   

          

     <div  >
    
      <h3 className='totalclas'> Toplam Fiyat: {totalPrice} $  </h3>
    
        
         </div>



    </div>
  )
}

export default Order