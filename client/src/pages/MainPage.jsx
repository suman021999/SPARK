import React from 'react'
import Display from '../components/Display/Display'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Namepage from '../components/auth/Namepage'
import DashboardPage from './DashboardPage'
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
      </Routes>
    </Router> 
    </>
  )
}

export default MainPage