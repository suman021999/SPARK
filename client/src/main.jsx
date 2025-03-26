// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  PhoneProvider } from './hooks/PhoneContext.jsx'

createRoot(document.getElementById('root')).render(
    <PhoneProvider>
    <App />
    </PhoneProvider>
  
)
{/* <StrictMode> */}