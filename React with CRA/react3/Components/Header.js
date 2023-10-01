import React, { useContext } from 'react'
import Nav from './Nav'
import { MyContext } from '@/Helper/Context'

const Header = (props) => {
  const user = useContext(MyContext)
    console.log(props.num)
  return (
    <div className='bg-green-700 p-5'>
      {user}
      
    </div>
  )
}

export default Header
