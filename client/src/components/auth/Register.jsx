
import React, { useState, useContext} from "react";
import Frame from "../../../public/Frame.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PhoneContext } from "../../hooks/PhoneContext"; 

const Register = () => {
  const { setUsername } = useContext(PhoneContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validatePassword = (password) => {
    let passwordErrors = "";
    if (!password) {
      passwordErrors = "Please enter your password*";
    } else if (password.length < 8) {
      passwordErrors = "The password must be at least 8 characters long*";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])/.test(password)) {
      passwordErrors = "Please choose a strong password that includes at least 1 lowercase and uppercase letter, a number, and a special character (@#$%^&*)*";
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

    
    if (name === "email") {
      const extractedUsername = value.split("@")[0]; 
      setUsername(extractedUsername);
      localStorage.setItem("username", extractedUsername);
    }
    validate(name, value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert("You must agree to the terms before registering.");
      return;
    }
    try {
      const res = await axios.post(`${import.meta.env.VITE_AUTH_URL}/api/v1/auth/register`, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
  
      if (res.status === 201) {
        alert("Registration Successful!");
  
        const extractedUsername = formData.email.split("@")[0];
        setUsername(extractedUsername);
        localStorage.setItem("username", extractedUsername);
  
        navigate("/login");
      } else {
        alert("Unexpected response. Please try again.");
      }
      return res;
    } catch (error) {
      alert(error.response?.data?.msg || "Registration failed");
    }
  };
  

  return (
    <>
      <section className="reg">
        <div className="reg_from">
          <div className="logo">
            <img src='/public/logo.svg' alt="" />
            <h2>SPARK<sup>TM</sup></h2>
          </div>

          <div className="reg_box">
            <h2>Sign up to your Spark</h2>

            <div className="account_create">
              <h5>Create an account</h5>
              <p className="underline_green" onClick={() => navigate("/login")}>
                Sign in instead
              </p>
            </div>

            <form className="form" onSubmit={handleRegister}>
              <div>
                <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="First name" />
                <p className="from_name">{errors.firstName}</p>
              </div>

              <div>
                <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Last name" />
                <p className="from_name">{errors.lastName}</p>
              </div>

              <div>
                <input name="email" value={formData.email} onChange={handleChange} type="text" placeholder="Email" />
                <p className="from_name">{errors.email}</p>
              </div>

              <div>
                <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Password" />
                <p className="from_name">{errors.password}</p>
              </div>

              <div>
                <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} type="password" placeholder="Confirm Password" />
                <p className="from_name">{errors.confirmPassword}</p>
              </div>

              <div className="checkbox">
                <input name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} type="checkbox" id="" />
                <p>
                  By creating an account, I agree to our{" "}
                  <span className="checkbox_black">Terms of use</span> and{" "}
                  <span className="checkbox_black">Privacy Policy</span>
                </p>
              </div>
              <button type="submit">Create an account</button>
            </form>
          </div>
        </div>
        <img className="reg_img" src={Frame} alt="" />
      </section>
    </>
  );
};

export default Register;
