import { useState } from 'react'
import './App.css'
import Home from '../src/screens/Home'
import { Routes, Route, Router } from "react-router-dom";
import Login from './screens/Login';
function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className=''>
    //   <div><Footer/></div>
    //   <div><Navbar/></div>
    // </div>
    <Routes>
      
        
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
             
    </Routes>
  )
}

export default App
