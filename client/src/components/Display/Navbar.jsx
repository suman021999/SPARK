import React from 'react'
import logo from "../../../public/logo.svg"
import "./display.css"
const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='nav_logo'>
        <img src={logo} alt="" />
        <h2>SPARK<sup>TM</sup> <span>| Marketplace</span></h2> 
        </div>
        <button>Sign up free</button>
        

      </nav>
    </>
  )
}

export default Navbar
