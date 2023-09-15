import React, { useState } from 'react'

function LoginForm() {
    const[formdata,setFormdata]=useState({
        email:"",password:""
    })
    function changeHandeler(event)
    {
       
        setFormdata((prev)=>({...prev,
        [event.target.name]:event.target.value}))
    }
  return (
    <form >
        <label >
               <p>
                Email Address <sup>*</sup>
                </p>
      
        <input type="text" required placeholder='Enter your email id' value={FormData.email}
        onChange={changeHandeler}
        />
          </label>
    </form>
  )
}

export default LoginForm
