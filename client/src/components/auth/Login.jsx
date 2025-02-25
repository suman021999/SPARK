import React from 'react'
import "./auth.css"
import logo from "../../../public/logo.svg"
 import Frame from "../../../public/Frame.png"
const Login = () => {
  return (
    <>
      <section className='login'>
        <div className='login_from'>
           <div className='logo'>
            <img src={logo} alt="" />
            <h2>SPARK<sup>TM</sup></h2>
           </div>

        <div className='login_box'>
            <h2>Sign in to your Spark</h2>
            <form className='form'>
                <input type="text" placeholder='spark/username' />
                <input  type="password" placeholder='password' />
                <button>login</button>
            </form>
            <h4 className='underline_green'>Forgot password?</h4>
            <p>Don't have an account?<span className='underline_green'>Sign up</span></p>           
        </div>
        
       
        </div>
        <img className='login_img' src={Frame} alt=""  />
      </section>
    </>
  )
}

export default Login
