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
            <div className='card'>
              <p>Clicks on Links</p>
              <h2>{0}</h2>
              </div>
            <div className='card'>
            <p>Click on Shop</p>
            <h2>{334}</h2>
            </div>
            <div className='card'>
            <p>CTA</p>
            <h2>{222}</h2>
            </div>
          </div>

          <div className='charts'>
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
