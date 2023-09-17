import React, { useState } from 'react'

function SignupForm() {
  const [formDqtq, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })
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

      <form >

        <div>
          <label >
            <p>First Name<sup>*</sup></p>
            <input type="text"
              required
              name='firstname'
              onChange={changeHandeler}
              placeholder='Enter First Name'
              value={FormData.firstName} />
          </label>
          <label >
            <p>First Name<sup>*</sup></p>
            <input type="text"
              required
              name='firstname'
              onChange={changeHandeler}
              placeholder='Enter First Name'
              value={FormData.firstName}/>
          </label>
        </div>


      </form>
    </div>


  )
}

export default SignupForm
