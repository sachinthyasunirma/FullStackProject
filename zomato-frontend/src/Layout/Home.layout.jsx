import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Searchbar from '../Components/Searchbar/Searchbar'

function HomeLayout({children}) {
  return (
    <>
    <Navbar />
    <Searchbar />
    {children}
    </>
  )
}

export default HomeLayout