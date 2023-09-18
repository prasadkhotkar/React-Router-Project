import React, { useState } from 'react'
import NavBar from './components/NavBar'
import {Routes,Route} from "react-router-dom"
import "./App.css"
import Home from './pages/Home'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
