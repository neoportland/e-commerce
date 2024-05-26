/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/products'
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from 'react';

function Details2()  {

  const [count, setCount] = useState(0)

    const {products, selectedProduct} = useSelector((store)=>store.product) //product adlı depodan verileri çek 




    const {id}= useParams()
    const dispatch=useDispatch()
     
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
       <h1  style={{marginBottom:"15px"}} >  {selectedProduct.price}  TL  </h1>

       <div className='card' style={{width:"679px", height:"auto", margin:"-2px" }}  > 
          <div className='result' >
          <h5>
             {/* rate={selectedProduct.rating.rate} */}

            </h5>
            <h5>
                       {/* count ={selectedProduct.rating.count} */}

            </h5>
          </div>
          <div  style={{display:"flex",  alignItems:"center"}} > 
          <FaPlus  onClick={increment}  style={{margin:"15px", cursor:"pointer" }} /> <h1 > {count}  </h1> <FaMinus  onClick={decrement}  style={{marginLeft:"15px", cursor:"pointer"}} />
          </div> 
 
             <div className='detail_button' style={{margin:"24px -6px"}}  >
                <button className='detail_button2' >Ekle</button>
            </div>

         
            
            
            
             </div>

            
        </div>

       
   
           



    </div>
  )
}

export default Details2 