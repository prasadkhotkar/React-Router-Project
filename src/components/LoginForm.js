import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";

function LoginForm() {
    const[formdata,setFormdata]=useState({
        email:"",password:""
    })
    const[showpassword,setShowpassword]=useState(false);
    function changeHandeler(event)
    {
       
        setFormdata((prev)=>({...prev,
        [event.target.name]:event.target.value}))
    }
  return (
    <form >
        <label >
               <p>
                Email Address<sup>*</sup>
                </p>
      
        <input type="text" required placeholder='Enter your email id' value={FormData.email}
        onChange={changeHandeler} name="email"
        />
          </label>
          <label >
            <p>
              password<sup>*</sup>
            </p>
            <input type={showpassword ?("text"):("password")} required placeholder='Enter password' value={FormData.password}
        onChange={changeHandeler} name="password"
        />
        <span onClick={()=>setShowpassword((prev)=>!prev)}>
          {showpassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
        </span>
        <Link to="#">
          <p>
            Forgot password
          </p>
        </Link>
          </label>
          <button>
            Sign In
          </button>
    </form>
  )
}

export default LoginForm
