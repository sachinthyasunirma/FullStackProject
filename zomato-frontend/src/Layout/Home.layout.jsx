import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

function HomeLayout({children}) {
  return (
    <>
    <Navbar />
    {children}
    <h1>Footer</h1>
    </>
  )
}

export default HomeLayout