import React from 'react'
import Login from './Login_components/Login'
import Signup from './Login_components/Signup'
import ForgotPassword from './Login_components/ForgotPassword'
import ResetPassword from './Login_components/ResetPassword'
import Dashboard from './Login_components/Dashboard'
import NavBar from './Login_components/NavBar'
import { Route,BrowserRouter, Routes,Navigate} from 'react-router-dom'
import VerifyOtp from './Login_components/VerifyOtp'

function App() {
  return <div >
    
      <BrowserRouter>

      <NavBar/>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
         <Route path="/dashboard" element={< Dashboard />} /> 
      </Routes>
        
      </BrowserRouter>
    </div>  
}

export default App