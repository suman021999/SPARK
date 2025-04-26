import React from 'react'
import Display from '../components/Display/Display'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Namepage from '../components/auth/Namepage'
import DashboardPage from './DashboardPage'
import PhonePrivew from "../components/phone/PhonePrivew"
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'


const MainPage = () => {
  return (
    <> 
    <Router>
    
      <Routes>
        <Route path='/' element={<Display/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/namepage' element={<Namepage/>}/>
        <Route path="/dashboard/*" element={<DashboardPage/>}/>
        <Route path="/preview/:id" element={<PhonePrivew/>} />

      </Routes>
    </Router> 
    </>
  )
}

export default MainPage