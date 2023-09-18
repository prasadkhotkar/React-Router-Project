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
    console.log("printing form data")
    console.log(accountData);

    navigate("/dashboard")
  }
  return (
    <div >
      <div>
        <button>
          Student
        </button>
        <button>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandeler} >

        <div>
          <label >
            <p>First Name<sup>*</sup></p>
            <input type="text"
              required
              name='firstName'
              onChange={changeHandeler}
              placeholder='Enter First Name'
              value={formData.firstName} />
          </label>
          <label >
            <p>Last Name<sup>*</sup></p>
            <input type="text"
              required
              name='lastName'
              onChange={changeHandeler}
              placeholder='Enter Last Name'
              value={formData.lastName}/>
          </label>
        </div>
        <label >
            <p>Email Address<sup>*</sup></p>
            <input type="email"
              required
              name='email'
              onChange={changeHandeler}
              placeholder='Enter Email Address'
              value={formData.email}/>
          </label>
          <div>
          <label >
            <p>Create Password<sup>*</sup></p>
            <input type={showpassword? ("text"):("password")}
              required
              name='password'
              onChange={changeHandeler}
              placeholder='Enter password'
              value={formData.password}/>

           <span onClick={()=>setShowpassword((prev)=>!prev)}>
          {showpassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
        </span>
          </label>

          <label >
            <p>Confirm Password<sup>*</sup></p>
            <input type={showpassword? ("text"):("password")}
              required
              name='confirmPassword'
              onChange={changeHandeler}
              placeholder='confirm password'
              value={formData.confirmPassword}/>

           <span onClick={()=>setShowpassword((prev)=>!prev)}>
          {showpassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
        </span>
          </label>
          </div>
  
       <button>
        Create Account
       </button>
      </form>
    </div>


  )
}

export default SignupForm
