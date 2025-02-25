import React from 'react'
import Display from '../components/Display/Display'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Namepage from '../components/auth/Namepage'
import DashboardPage from './DashboardPage'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Linkspage from '../components/Links/Linkspage'

const MainPage = () => {
  return (
    <>
      {/* <Display/> */}

      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Namepage/> */}
      <DashboardPage/>
    </>
  )
}

export default MainPage