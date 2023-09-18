import React from 'react'
import Template from "../components/Template"
import loginImg from "../assets/login.png"
function Login({setIsLoggedIn}) {
  return (
    <Template
    title="Welcome Back"
    des1="Build skills for today,tommarow,beyond."
    desc2="Education to future-proof your career."
    image={loginImg}
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}
    
    />
  )
}

export default Login
