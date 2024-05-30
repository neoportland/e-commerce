/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import logo from "../images/logo.png"
import "./Header.css"
import { SlBasket } from "react-icons/sl";
import { CiLight } from "react-icons/ci";
import { MdLightbulb } from "react-icons/md";
import { useState } from 'react';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
   const [thema, setThema] = useState(true)
   const { orderProduct } = useSelector((store)=>store.basket)
   console.log("toplam ürün ")
   console.log(orderProduct.length)
  

   const navigate = useNavigate()

   const cahngeThema =()=>{ 
    // console.log("imleç basıldı ")
    const root=document.getElementById("root")
    // console.log(thema)
          if(thema){  
          root.style.backgroundColor="black"
          root.style.color="white"

        }else{
          root.style.backgroundColor="white"
          root.style.color="black"
        }
        setThema(!thema) 
     
   } 
   let count= 3
  return (
  <div>
  <div className='header'>
         <div className='flex_row' >
            <img className='header_img'  style={{cursor:"pointer"}}  onClick={()=>navigate("/")}  src={logo} alt="" />
            <h2 className='title_text'  style={{cursor:"pointer"}} onClick={()=>navigate("/company")} > Nevzat Giyim Dünyası  </h2>
         </div>
         <div className='flex_row' >
              <input placeholder='bir şeyler yaz'  className='search_input' type="text"  />
              {  thema ? <CiLight className='icon' onClick={cahngeThema} /> : <MdLightbulb className='icon'   onClick={cahngeThema}  />  }
             


             <Badge badgeContent={orderProduct.length} color="primary">
               <SlBasket  onClick={()=>navigate("/order")}  className='icon'/>
      
              </Badge>            
                       
         </div>  

    </div>


  </div>
  )
}

export default Header