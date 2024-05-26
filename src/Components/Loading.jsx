/* eslint-disable no-unused-vars */
import Backdrop from '@mui/material/Backdrop';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';






export default function SimpleBackdrop() {
  const [open, setOpen] = useState(true)
 

  const {loading} = useSelector((store)=>store.product)
  
  return (
    <div>

      

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
         
       
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
