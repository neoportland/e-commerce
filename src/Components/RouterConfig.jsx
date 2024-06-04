/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
// import Details from './Details'
import Details2 from './Details2'
import Company from './Company'
import Order from './Order'
import Searching from './Searching'
// import ProductList from "./Components/ProductList"


const RouterConfig = () => {   
  return (
    <div>
 

        <Routes>
            <Route path='/' element={<Home/>} >Home </Route>
            <Route path='/company' element={<Company/>} >Home </Route>
            <Route path='/order' element={<Order/>} > Order </Route>
            <Route path='/product-details/:id' element={<Details2/>} > Details </Route>
            <Route path='/searching' element={<Searching/>} > Searching  </Route>
          
        </Routes> 
 





    </div>
  )
}

export default RouterConfig