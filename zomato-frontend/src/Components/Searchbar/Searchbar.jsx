import React from 'react'

const MobileSearch = () =>{
    return(
        <>
        </>
    );
}

const LargeSearch = () =>{
    return(
        <></>
    )
}

function Searchbar() {
  return (
    <div className='flex bg-slate-900 shadow-md lg:shadow-none w-full items-center'>
        <MobileSearch />
        <LargeSearch />
    </div>
  )
}

export default Searchbar