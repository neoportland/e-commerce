/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import React from 'react'
import { getAllProducts } from '../redux/slices/products'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const dispatch=useDispatch()
    const {products, value}=useSelector((store)=>store.product) // bir slice ı işaret ettiğinizde o sliceın inital state i size geri döner 
        let sayi=40; 
    
     useEffect(()=>{
        dispatch(getAllProducts())  //  bu fonksiyonu ilk kod bloğu çalıştığında çağır 
        
        
     },[])
     
     
    
   


       


  return (
    <div className='flex_row' style={{flexWrap:"wrap"}} >  
    
      

       
 {               products.map((produc, index)=>{
                // return <ProductItem key={index} {...produc} />
                return <ProductItem key={index} ıtems={produc} />
                
            })}
        
       
         </div>
  )
}

export default ProductList