import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../../public/logo.svg"

const Navbar = () => {
  const nevigate=useNavigate()
  return (
    <>
      <nav className='navbar'>
        <div className='nav_logo'>
        <img src={logo} alt="" />
        <h2>SPARK<sup>TM</sup> <span>| Marketplace</span></h2> 
        </div>
        <button onClick={()=>nevigate('/register')}>Sign up free</button>
      

      </nav>
    </>
  )
}

export default Navbar
