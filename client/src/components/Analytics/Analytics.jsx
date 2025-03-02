import React from 'react'
import "./analytics.css"
import Nav from '../Navbar/Nav'
const Analytics = () => {
  return (
    <>
      <div className='analytics'>
         <Nav isVisible={false} />
         <div className="analytics_container">

       
          <div className='analytics_text'>
            <p>Overview</p>
            <div className='analytics__calender'>fffffffff</div>
          </div>

         <div className='analytics_scroll'>
          
          <div className='analytics_scroll_card'>
            <div className='card_1'>
                <p>Clicks on Links</p>
                <h2>number</h2>
            </div>
            <div className='card_2'>
            <p>Click on Shop</p>
            <h2>number</h2>
            </div>
            <div className='card_2'>
            <p>CTA</p>
            <h2>number</h2>
            </div>
          </div>


          <div></div>

          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>

         </div>


         </div>

         
      </div>
    </>
  )
}

export default Analytics
