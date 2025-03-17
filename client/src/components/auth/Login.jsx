import React, {useContext, useState } from 'react'
import "./auth.css"
import logo from "../../../public/logo.svg"
import Frame from "../../../public/Frame.png"
import { useNavigate } from 'react-router-dom'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import axios from 'axios';
import { PhoneContext } from '../../hooks/PhoneContext'

const Login = () => {
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();
const{username, setUsername}=useContext(PhoneContext)

  const handleLogin=async(evx)=>{
    evx.preventDefault();
    try {
      const res=await axios.post(`${import.meta.env.VITE_AUTH_URL}/login`,{
        username,
        password,
      })
      
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user))
        localStorage.setItem("userId", res.data.user._id);
        navigate("/namepage");
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
              <div className='from_input_div'>
              <input type="text"
                 placeholder='spark/username' 
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 />
              </div>
                

                 <div className='from_input_div'>
                 <input  
                  type={showPassword ? "text" : "password"}
                placeholder='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                 <span  onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash/> : <FaEye />}
                </span>
                </div>
               

                <button type="submit">login</button>
            </form>

            {/* <h4
              className='underline_green'
              onClick={() => navigate("/forgot-password")}
              style={{ cursor: "pointer", color: "green" }}
            >
              Forgot password?
            </h4> */}

            <p>Don't have an account?<span  className='underline_green' onClick={() => navigate("/register")}>Sign up</span></p>           
        </div>
        
       
        </div>
        <img className='login_img' src={Frame} alt=""  />
      </section>
    </>
  )
}

export default Login
