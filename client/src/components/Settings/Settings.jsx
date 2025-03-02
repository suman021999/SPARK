import React from 'react'
import "./settings.css"
import Nav from '../Navbar/Nav'
const Settings = () => {
  return (
    <>
      <div className='settings'>
      <Nav isVisible={false} />

      <div className='setings_content'>
          <p>Edit Profile</p>
          <hr />

          <form className='form_container' action="">

           <div className='form_box'>
           <label htmlFor="">First name</label>
           <input className='form_box_input' type="text" />
           </div>

           <div className='form_box'>
           <label htmlFor="">Last name</label>
           <input  className='form_box_input' type="text" />
           </div>

           <div className='form_box'>
           <label htmlFor="">Email</label>
           <input className='form_box_input' type="email" required/>
           </div>

           <div className='form_box'>
           <label htmlFor="">Password</label>
           <input className='form_box_input' type="password" />
           </div>

           <div className='form_box'>
           <label htmlFor="">Confirm Password</label>
           <input className='form_box_input' type="password" />
           </div>

          </form>
          <div className='setings_content_div_button'><button className='setings_content_button'>Save</button></div>
      </div>
      </div>
    </>
  )
}

export default Settings
