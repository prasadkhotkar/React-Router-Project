import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function LoginForm({setIsLoggedIn}) {
  const navigate=useNavigate;
    const[formdata,setFormdata]=useState({
        email:"",password:""
    })
    const[showpassword,setShowpassword]=useState(false);
    function changeHandeler(event)
    {
       
        setFormdata((prev)=>({...prev,
        [event.target.name]:event.target.value}))
    }
    function submitHandeler(event)
    {
      event.preventDefault();
      setIsLoggedIn(true);
      toast.success("Logged In")
      navigate("/dashboard")
    }
  return (
    <form onSubmit={submitHandeler}>
        <label >
               <p>
                Email Address<sup>*</sup>
                </p>
      
        <input type="email" required placeholder='Enter your email id' value={FormData.email}
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
