import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {RiShoppingBag3Line} from 'react-icons/ri'
import {IoFastFoodOutline, IoNutritionOutline} from 'react-icons/io5'
import {BiDrink} from 'react-icons/bi'
import {FiSearch} from 'react-icons/fi'
const MobileTabs = () =>{
    const [allTypes, setAllTypes] = useState([
        {
            id: "search",
            icon: <FiSearch />,
            name: "Delivery"
        },
        {
            id: "dining",
            icon: <IoFastFoodOutline />,
            name: "Dining"
        },
        {
            id: "night",
            icon: <BiDrink />,
            name: "Nigth Life"
        },
        {
            id: "nutri",
            icon: <IoNutritionOutline />,
            name: "Nutrition"
        }
    ])
    const {type} = useParams();

    return(
        <div className='lg:hidden bg-white shadow-lg p-3 flex fixed bottom-0 z-10 w-full items-center justify-between md:justify-evenly text-gray-500 border'>
            {allTypes.map((item)=>(
                <Link to={`/${item.id}`}>
                    <div className={
                        type === item.id ? "flex flex-col relative items-center text-xl text-red-400" : "flex flex-col items-center text-xl"
                    }>
                        <div className={
                            type == item.id && "absolute -top-3 w-full h-2 border-t-2 border-red-500"
                        }>
                            {item.icon}
                            <h5 className='text-sm'>{item.name}</h5>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
const LargeTabs = () =>{
    return(
        <></>
    )
}
function NavTab() {
  return (
    <div>
        <MobileTabs />
        <LargeTabs />
    </div>
  )
}

export default NavTab