import React from 'react'
import "./display.css"
import Navbar from './Navbar'
import Front from './Front'
import Review from './Review'
import LinkConnected from './Link'
import Contact from './Contact'
const Display = () => {
  return (
    <>
      <div className='display'>
            <Navbar/>
           <Front/>
           <Review/>
           <LinkConnected/>
           <Contact/>
      </div>
    </>
  )
}

export default Display
