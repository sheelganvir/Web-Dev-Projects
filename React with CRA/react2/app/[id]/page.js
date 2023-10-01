"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const page = ({params}) => {
    const {id}= params    
    const [user, setuser] = useState([])
  const getUsers = async() => {

    // const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    // const data = res.data

    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)

    setuser(data)
  }

  useEffect(() => {
    getUsers()
    
  }, [])
    return <>{JSON.stringify(user)}</>
  
}

export default page
