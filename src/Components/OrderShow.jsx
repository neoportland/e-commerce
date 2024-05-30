/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';



const OrderShow = ({image, title, price,count}) => {

  const {products} =useSelector((store)=>store.product)


    
 
  

  return (
    <div >
        
      

        <div  className='urun_show'   style={{display:"flex", marginBottom:"45px", justifyContent:"space-between",  alignItems:"center"}} >

<div  style={{display:"flex", alignItems:"center"}} >
<img style={{width:"30px", height:"30px" , marginRight:"5px"}} src={image} alt="eticaret" />
<h4>  {title}:   </h4> <br />
</div>

<div  style={{display:"flex", justifyContent:"space-between", width:"255px"}} >
<div  style={{display:"flex", marginRight:"20px",  alignItems:"center"}} > 

          <FaPlus    style={{margin:"5px",fontSize:"12px", cursor:"pointer" }} /> <h4 > {count} </h4> <FaMinus   style={{marginLeft:"5px", fontSize:"12px",  cursor:"pointer"}} />
          </div> 
{/* <h3 style={{marginRight:"50px"}}>  Adet :  </h3> <br /> */}
<div style={{display:"flex", alignItems:"center "}}>
<h3> {count*price}  $   </h3> <br />
<button className='button_delete' style={{marginLeft:"22px"}}>SİL</button>
</div>
</div>



 




        </div>

    
    

    </div>
  )
}

export default OrderShow