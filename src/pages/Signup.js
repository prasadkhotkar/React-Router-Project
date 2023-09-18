import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

function Signup({setIsLoggedIn}) {
  return (
    <Template
    title="Join the millions learning to code with studyNotion for free"
    des1="Build skills for today,tommarow,beyond."
    desc2="Education to future-proof your career."
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
