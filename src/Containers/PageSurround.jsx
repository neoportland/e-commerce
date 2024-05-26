/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const PageSurround = ({children}) => {
    // app componentinede yani bütün uygulamada görünecek özellikler için burdayız 
  return (
    <div style={{margin:"0px 100px"}}> 
        
         {children} </div>
  )
}

export default PageSurround