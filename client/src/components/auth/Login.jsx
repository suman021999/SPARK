import React, {useState } from 'react'
import "./auth.css"
import logo from "../../../public/logo.svg"
 import Frame from "../../../public/Frame.png"
 import { useNavigate } from 'react-router-dom'
import Register from './Register'
import axios from 'axios';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin=async(evx)=>{
    evx.preventDefault();
    try {
      const res=axios.post(`${import.meta.env.VITE_AUTH_URL}/login`,{
        email: username,
        password: password,
      })
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token); // Save token what is it
        alert('Login Successful');
        navigate('/dashboard'); // Redirect after login
      }
      
    } catch (error) {
       alert(error.response?.data?.msg || 'Login failed');
    }
  }

  
    
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
            <form className='form' onSubmit={handleLogin}>
                <input type="text"
                 placeholder='spark/username' 
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 />
                <input  
                type="password" 
                placeholder='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">login</button>
            </form>
            <h4 className='underline_green'>Forgot password?</h4>
            <p>Don't have an account?<span  className='underline_green' onClick={() => navigate("/register")}>Sign up</span></p>           
        </div>
        
       
        </div>
        <img className='login_img' src={Frame} alt=""  />
      </section>
    </>
  )
}

export default Login
