/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
//  productIte productlistten map ile aldığı verileri basar. Ayrıca detaya gitbutonu nbasıldığında naviget ile bir router açar ve aynı zamanda ürünün id sini de o rada yakalayabilirisin. ki  ordan aldığın id ile aradağın ürünü bulursun . //

// const ProductItem = ({id, title, price}) => {
    const ProductItem = ({ıtems}) => {

const navigate= useNavigate()

  return (
    <div className='card' > 
        <img  className='image' src={ıtems.image} alt="" />
        <p style={{textAlign:"center", height:"80px"}}  >{ıtems.title} </p>
        <h3 style={{textAlign:"center"}}  >{ıtems.price} $  </h3>
        <div className='detail_button'>
            
            <button onClick={()=>navigate("/product-details/"+ıtems.id)}  >Detayına Git</button>
        </div>
        
         </div>
  )
}

export default ProductItem