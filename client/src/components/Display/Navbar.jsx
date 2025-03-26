import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../auth/Login'
const Navbar = () => {
  const nevigate=useNavigate(<Login/>)
  return (
    <>
      <nav className='navbar'>
        <div className='nav_logo'>
        <img src='/public/logo.svg' alt="" />
        <h2>SPARK<sup>TM</sup> <span>| Marketplace</span></h2> 
        </div>
        <button onClick={()=>nevigate('/login')}>Sign up free</button>
      

      </nav>
    </>
  )
}

export default Navbar
