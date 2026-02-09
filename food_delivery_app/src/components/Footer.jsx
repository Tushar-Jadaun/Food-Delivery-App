import React from 'react'
export default function Footer() {
  return (
    <div className='text-center w-full'>
      <div className='mt-2 justify-between ml-75 mr-75 flex text-gray-400 hover:text-gray-400 transition text-center'>
        <a className='m-2 text-center'>Home</a>
        <a className='m-2 text-center'>Features</a>
        <a className='m-2 text-center'>Pricing</a>
        <a className='m-2 text-center'>FAQs</a>
        <a className='m-2 text-center'>About</a>
      </div>
      <hr className=' w-200 mx-auto my-3 h-[2px] bg-gray-300 border-0' />

      <div>
        <p className='text-sm text-gray-400 justify-center'>©2021 Company,Inc</p>
      </div>
    </div>
  )
}
