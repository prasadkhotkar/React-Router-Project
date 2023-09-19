import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function LoginForm({setIsLoggedIn}) {
  const navigate=useNavigate();
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
      console.log("printing form data");
      console.log(formdata)
      navigate("/dashboard")
    }
  return (
    <form onSubmit={submitHandeler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
               <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
                </p>
      
        <input type="email" required placeholder='Enter your email address' value={FormData.email}
        onChange={changeHandeler} name="email"
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
          </label>
          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              password<sup className='text-pink-200'>*</sup>
            </p>
            <input type={showpassword ?("text"):("password")} required placeholder='Enter password' value={FormData.password}
        onChange={changeHandeler} name="password"
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
        <span
         className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setShowpassword((prev)=>!prev)}>
          {showpassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>
        <Link to="#">
          <p className='text-xs text-blue-100 max-w-max ml-auto'>
            Forgot password
          </p>
        </Link>
          </label>
          <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In
          </button>
    </form>
  )
}

export default LoginForm
