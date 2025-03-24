import React from 'react'
import logo from "../../../public/logo.svg"
import { useNavigate } from 'react-router-dom'
import Login from '../auth/Login'
const Navbar = () => {
  const nevigate=useNavigate(<Login/>)
  return (
    <>
      <nav className='navbar'>
        <div className='nav_logo'>
        <img src={logo} alt="" />
        <h2>SPARK<sup>TM</sup> <span>| Marketplace</span></h2> 
        </div>
        <button onClick={()=>nevigate('/login')}>Sign up free</button>
      

      </nav>
    </>
  )
}

export default Navbar
