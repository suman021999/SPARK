import React, { useState } from 'react'
import logo from "../../../public/logo.svg"
 import Frame from "../../../public/Frame.png"
import { useNavigate } from 'react-router-dom'
import Login from './Login'
const Register = () => {

 const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreeToTerms: false,
});
const [errors, setErrors] = useState({});

const validatePassword = (password) => {
  let passwordErrors = "";
  if (!password) {
    passwordErrors = "Please enter your password*";
  } else {
    if (password.length < 8) {
      passwordErrors = "The password must be at least 8 characters long*";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])/.test(password)) {
      passwordErrors = "Please choose a strong password that includes at least 1 lowercase and uppercase letter, a number, as well as a special character (@#$%^&*)*";
    }
  }
  return passwordErrors;
};

const validate = (name, value) => {
  let newErrors = { ...errors };
  if (name === "password") {
    newErrors.password = validatePassword(value);
  } else if (name === "confirmPassword") {
    newErrors.confirmPassword = value !== formData.password ? "The password you entered does not match*" : "";
  }
  setErrors(newErrors);
};

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData({
    ...formData,
    [name]: type === "checkbox" ? checked : value,
  });
  validate(name, value);
};


 

  const nevigate=useNavigate(<Login/>)
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
                    <p onClick={()=>nevigate('/login')} className='underline_green'>Sign in instead</p>
                  </div>
                  <form className='form'>

                    <div>
                    <input value={formData.firstName} onChange={handleChange} type="text" placeholder='First name' />
                      <p className='from_name'>{errors.firstName}</p>
                    </div>

                    <div>
                    <input value={formData.lastName} onChange={handleChange}  type="text" placeholder='Last name' />
                      <p className='from_name'>{errors.lastName}</p>
                    </div>
                    
                    <div>
                    <input value={formData.email} onChange={handleChange}  type="text" placeholder='Email' />
                      <p className='from_name'>{errors.email}</p>
                    </div>
                    
                    <div>
                    <input value={formData.password} onChange={handleChange}  type="text" placeholder='Password' />
                      <p className='from_name'>{errors.password}</p>
                    </div>  

                    <div>
                    <input value={formData.confirmPassword} onChange={handleChange} type="text" placeholder='Confirm Password' />
                      <p className='from_name'>{errors.confirmPassword}</p>
                    </div>
  
                      <div className='checkbox'>
                        <input checked={formData.agreeToTerms} onChange={handleChange} type="checkbox" name="agreeToTerms" id="" />
                        <p>By creating an account, I agree to our <span className='checkbox_black'>Terms of use</span> and <span className='checkbox_black'>Privacy Policy</span></p>
                        </div>
                      <button >Create an account</button>
                  </form>
                        
              </div>
              
             
              </div>
              <img className='reg_img' src={Frame} alt=""  />
        </section>
    </>
  )
}

export default Register
