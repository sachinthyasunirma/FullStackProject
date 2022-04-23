import React, { useState } from 'react';
import {FaUserAlt} from 'react-icons/fa'
import {RiArrowDropDownLine, RiArrowDropUpLine} from 'react-icons/ri';

const MobileNav = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [user , setUser] = useState();
  return (
    <div className='flex w-full items-center justify-between lg:hidden'>
      <div className='w-28'>
        <span className='font-bold'>GHub</span>
      </div>
      <div className='flex items-center gap-3 relative'>
        <button className='bg-slate-900 text-white py-2 px-3 rounded-full'>Use App</button>
        {user?.fullName?(
          <>
          <div onClick={()=>setIsDropDownOpen((prev)=> !prev)} className="border p-2 border-gray-300 text-cyan-300 w-20 h-20 rounded-full">
            <img src='https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png' alt='' className='w-full h-full rounded-full object-cover'/>
          </div>
          {isDropDownOpen && (
            <div className='absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2'>
              <button>SingOut</button>
            </div>
          )}
          </>
        ):(
          <>
          <span onClick={()=>setIsDropDownOpen((prev)=> !prev)} className='border p-2 broder-gray-300 txet-gray-900 rounded-full'>
            <FaUserAlt className='w-full h-full'/>
          </span>
          {isDropDownOpen && (
            <div className='absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2'>
              <button className='shadow-sm'>Sign In</button>
              <button>Sign Up</button>
            </div>
          )}
          </>
        )}
      </div>
    </div>
  )
}
const LargeNav = () => {
  return (
    <>
    
    </>
  )
}

function Navbar() {
  return (
    <>
      <nav className='p-4 flex bg-white shadow-md lg:shadow-none w-full items-center'>
        <MobileNav />
        <LargeNav />
      </nav>
    </>
  )
}

export default Navbar