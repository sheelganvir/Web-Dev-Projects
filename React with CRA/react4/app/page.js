"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const notify =()=>{
    toast("Login successfully")
  }
  return (
    <div>
      <button onClick={notify}>Login</button>
      <ToastContainer />
    </div>
  )
}

export default page
