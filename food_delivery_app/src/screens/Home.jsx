import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card.jsx'
import Carousal from '../components/Carousal.jsx'
export default function Home() {
  return (
    <div>
      <div><Navbar/></div>
      <div className='bg-gray-100 flex items-center justify-center'><Carousal/></div>
      <div className='flex'>
        <div className='m-2'><Card/></div>
        <div className='m-2'><Card/></div>
      </div>
      <div><Footer/></div>
    </div>
  )
}
