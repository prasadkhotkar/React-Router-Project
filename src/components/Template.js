import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from "./SignupForm"


function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}) {
  return (
 <div>
    <div>
        <h1>{title}</h1>
       <p>
        <span>{desc1}</span>
       <span>{desc2}</span>
      </p>
    
    {
        formtype==="signup"?
        {<SignupForm/>}:
        
    }
    </div>
    </div>
  )
}

export default Template
