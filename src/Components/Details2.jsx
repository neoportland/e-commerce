/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/products'
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from 'react';
import { addProductQuantity } from '../redux/slices/basketSlice';

function Details2()  {

  // Details' useParams ile aldığı id yi productsSlicedan aldığı ürünlerin id si ile karşılaştırıyor ve bulduğu spesifik productı dispatch ile selectedProduct(product) fonksiyonu ile productSlice a gönderiyor ordanda selectedProduct değişkenine atıyor. Ekle butonu ile tetiklenen fonskiyon basketSlice ına ürünün bilgilerini ve count değerini gönderiyor 
  
  const {id}= useParams()
  const dispatch=useDispatch() 

  const [count, setCount] = useState(1)

    const {products, selectedProduct} = useSelector((store)=>store.product) //product adlı depodan verileri çek 
    const {totalPrice} = useSelector((store)=>store.basket) // product adlı depodan verileri çek 
    const {image,title, price, description} =selectedProduct // description  
       
  const setCountProduct=()=>{
    // sayi=sayi+1 
    
    // if(sayi>1) return
    const payload={
      image,
      id,
      title,
      price,
      count,
      description
    }
    // arrayTotal.append(selectedProduct)
    // console.log("ArrayTotalappand",arrayTotal)
    // arrayTotal.push(selectedProduct) // seçili ürün 
    // arrayTotal.push({"count":count}) // seçili ürünün kaç adet seçildiği 
    // dispatch(addProductQuantity(arrayTotal))    
    dispatch(addProductQuantity(payload)) // karşı tarafta action.payload ile buraya ulaşabiliyorsam ekstra bir arrayTotal oluşturmya grk yok
  }
    
    useEffect(()=>{

        getProductById()

    },[])
  

    
    const getProductById=()=>{

        products.map((product)=>{
            if(product.id==id)
                dispatch(setSelectedProduct(product))
                
    }) }



    const increment=()=>{
      setCount(count+1)

    }
    const decrement=()=>{
      if(count==0) return
      setCount(count-1)

    }
  return (
    <div style={{
        display:"flex", justifyContent:"space-between"

    }}>
        <div style={{marginRight:"25px"}} >
        <h2> {selectedProduct.title}  </h2>

{
   <img  className='image2' src={selectedProduct.image} alt="" />
   
}
        </div >
        <div style={{marginBottom:"15px"}} >

       <p  style={{marginBottom:"15px"}} > {selectedProduct.description} </p>
       <h1  style={{marginBottom:"15px"}} >  {selectedProduct.price}  $   </h1>

       <div className='card' style={{width:"679px", height:"auto", margin:"-2px" }}  > 
          <div className='result' >
          
          </div>
          <div  style={{display:"flex",  alignItems:"center"}} > 
          <FaPlus  onClick={increment}  style={{margin:"15px", cursor:"pointer" }} /> <h1 > {count}  </h1> <FaMinus  onClick={decrement}  style={{marginLeft:"15px", cursor:"pointer"}} />
          </div> 
 
             <div className='detail_button' style={{margin:"24px -6px"}}  >
           
                <button className='detail_button2'   onClick={setCountProduct}   >Ekle</button>
            </div>

             </div>

            
        </div>

    </div>
  )
}

export default Details2 