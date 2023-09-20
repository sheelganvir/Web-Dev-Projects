import Header from '@/components/Header'
import './globals.css'

import { Inter } from 'next/font/google'




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='p-12'>
        <Header/>
        {children}</body>
    </html>
  )
}
