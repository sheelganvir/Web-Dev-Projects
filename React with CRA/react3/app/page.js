"use client"
import Header from '@/Components/Header'
import { MyContext } from '@/Helper/Context'
import React, { useContext, useState } from 'react'

const page = () => {
  const user = useContext(MyContext)
  console.log(user)
  return (
    <div>
      {user}
      <Header/>
    </div>
  )
}

export default page
