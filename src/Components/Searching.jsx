/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import ProductList from './ProductList'


const Searching = () => {

    const {products}= useSelector((store)=>store.product)

      



  return (
    <div>
      <h3>this is searching component</h3>

      <ProductList/> 


     


    </div>
  )
}

export default Searching