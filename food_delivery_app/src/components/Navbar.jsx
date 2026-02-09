import React from 'react'
import { AiOutlineShop } from "react-icons/ai";
export default function Navbar() {
  return (
    <div className='flex w-full bg-green-400  p-4 text-white'>
         <div className='flex'>
            <div className='flex'>
                <AiOutlineShop size={25}/>
                <a className='font-bold ml-0.5 text-xl'>Food Dilevery </a>
                
            </div>
            <div className='flex items-center space-x-4 font-bold ml-5'>
            {/* Added hover:text-gray-300 for a visible effect */}
            <a className='hover:text-gray-500 transition-colors' href='/'>Home</a>
            <a className='hover:text-gray-500 transition-colors' href='/login'>Login</a>
            {/* <a className='hover:text-gray-500 transition-colors' href='/pricing'>Pricing</a> */}
            {/* <a className='hover:text-gray-500 transition-colors' href='/pricing'>Disabled</a> */}
         </div>
            
         </div>
    </div>
  )
}
