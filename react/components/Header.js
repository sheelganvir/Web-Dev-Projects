import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <div className='bg-green-500 text-white h-16 px-5 flex items-center justify-between'>
                <h2>Logo</h2>
                <div className='flex gap-8'>
                    <Link href="/About">About</Link>
                    <Link href="/Courses">Courses</Link>
                    <Link href="/Products">Products</Link>

                </div> 
            </div>
        </>
    )
}

export default Header
