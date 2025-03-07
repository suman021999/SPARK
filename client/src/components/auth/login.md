import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './auth.css';
import logo from '../../../public/logo.svg';
import Frame from '../../../public/Frame.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email: username,
        password: password,
      });

      if (res.status === 200) {
        localStorage.setItem('token', res.data.token); // Save token what is it
        alert('Login Successful');
        navigate('/dashboard'); // Redirect after login
      }
    } catch (error) {
      alert(error.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <section className="login">
      <div className="login_from">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h2>SPARK<sup>TM</sup></h2>
        </div>

        <div className="login_box">
          <h2>Sign in to your Spark</h2>
          <form className="form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="spark/username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <h4 className="underline_green">Forgot password?</h4>
          <p>
            Don't have an account?
            <span onClick={() => navigate('/register')} className="underline_green">
              Sign up
            </span>
          </p>
        </div>
      </div>
      <img className="login_img" src={Frame} alt="Frame" />
    </section>
  );
};

export default Login;
