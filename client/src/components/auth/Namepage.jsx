import React from 'react'
import logo from "../../../public/logo.svg"
 import Frame from "../../../public/Frame.png"
const Namepage = () => {
  return (
    <>
          <section className='name'>
              <div className='name_from'>
                 <div className='logo'>
                  <img src={logo} alt="" />
                  <h2>SPARK<sup>TM</sup></h2>
                 </div>
      
              <div className='name_box'>
                  <h2>Tell us about yourself</h2>
                    <h5>For a personalized Spark experience</h5>
                  
                  <form className='form'>
                      <input type="text" placeholder='spark/username' />
                  </form>
                  <p>Select one category that best describes your Linktree:</p>  


                  <button></button>         
              </div>
              
             
              </div>
              <img className='name_img' src={Frame} alt=""  />
            </section>
    </>
  )
}

export default Namepage
