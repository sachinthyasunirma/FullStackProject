import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

function HomeLayout({children}) {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}

export default HomeLayout