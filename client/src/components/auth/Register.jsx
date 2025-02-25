import React from 'react'
import logo from "../../../public/logo.svg"
 import Frame from "../../../public/Frame.png"
const Register = () => {
  return (
    <>
      <section className='reg'>
              <div className='reg_from'>
                 <div className='logo'>
                  <img src={logo} alt="" />
                  <h2>SPARK<sup>TM</sup></h2>
                 </div>
      
              <div className='reg_box'>
                  <h2>Sign up to your Spark</h2>

                  <div className='account_create'>
                    <h5>Create an account</h5>
                    <p className='underline_green'>Sign in instead</p>
                  </div>
                  <form className='form'>
                      <input type="text" placeholder='First name' />
                      <input type="text" placeholder='Last name' />
                      <input  type="email" placeholder='Email' />
                      <input  type="password" placeholder='password' />
                      <input  type="password" placeholder='Confirm Password' />
                      <div className='checkbox'>
                        <input type="checkbox" name="" id="" />
                        <p>By creating an account, I agree to our <span className='checkbox_black'>Terms of use</span> and <span className='checkbox_black'>Privacy Policy</span></p>
                        </div>
                      <button>Create an account</button>
                  </form>
                        
              </div>
              
             
              </div>
              <img className='reg_img' src={Frame} alt=""  />
            </section>
    </>
  )
}

export default Register
