import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function SignupForm({setIsLoggedIn}) {
  const navigate=useNavigate();
  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword:""
    
  }
  )
  const[showpassword,setShowpassword]=useState(false)
  const[showConfirmpassword,setConfirmShowpassword]=useState(false)
  const[accountType,setAccountType]=useState("Student")
  function changeHandeler(event)
  {
     
      setFormdata((prev)=>({...prev,
      [event.target.name]:event.target.value}))
  }
  function submitHandeler(event)
  {
    event.preventDefault();
    if(formData.password !=formData.confirmPassword){
      toast.error("passwords do not match")
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData={
      ...formData
    }
  const finalData={
    ...accountData,
    accountType

  }
    console.log("printing final account data")
    console.log(finalData);

    navigate("/dashboard")
  }
  return (
    <div className=" " >
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max ' >
        <button 
        className={`${accountType=== "Student" ? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>
        setAccountType("Student")}>
          Student
        </button>
        <button  className={`${accountType=== "Instructor" ? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>
        setAccountType("Instructor")}>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandeler} className=" ">

        <div className='w-full flex gap-x-4 justify-between'>
          <label className='mt-[20px]'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
            <input type="text"
              required
              name='firstName'
              onChange={changeHandeler}
              placeholder='Enter First Name'
              value={formData.firstName}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
          </label>
          <label className="mt-[20px] ">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
            <input type="text"
              required
              name='lastName'
              onChange={changeHandeler}
              placeholder='Enter Last Name'
              value={formData.lastName}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
          </label>
        </div>
        <div className='mt-[20px]'>
        <label  >
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
            <input type="email"
              required
              name='email'
              onChange={changeHandeler}
              placeholder='Enter Email Address'
              value={formData.email}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
          </label>
          </div>
          <div className='flex gap-x-4 mt-[20px]'>
          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
            <input type={showpassword? ("text"):("password")}
              required
              name='password'
              onChange={changeHandeler}
              placeholder='Enter password'
              value={formData.password}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

           <span  className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setShowpassword((prev)=>!prev)}>
          {showpassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>
          </label>

          <label className=' w-full relative' >
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
            <input type={showConfirmpassword? ("text"):("password")}
              required
              name='confirmPassword'
              onChange={changeHandeler}
              placeholder='confirm password'
              value={formData.confirmPassword}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

           <span
            className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setConfirmShowpassword((prev)=>!prev)}>
          {showConfirmpassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>
          </label>
          </div>
  
       <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
        Create Account
       </button>
      </form>
    </div>


  )
}

export default SignupForm
