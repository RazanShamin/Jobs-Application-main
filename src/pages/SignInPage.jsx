import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const SignInPage =()=>{
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
console.log("Submit clicked")

    let valid = true;
    if (email.length==0 || !email.includes('.') || !email.includes('@'))   {
      console.log("Invalid email");
      valid = false;
    }

    if (password.length < 10 ) {
      console.log("Invalid password");
      valid = false;
    }
console.log("valid?",valid );
    if (valid) {
      console.log("Navigating to home...");
      navigate("/");
    }
    
  };

 
  

    return(
      <div  className="container m-auto max-w-2xl py-24 ">

      <form   onSubmit={submitHandler}  className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">     
       <h2 className="text-3xl text-center font-semibold mb-6">Sign in</h2>

        <div className="mb-4">
        <label  className="block text-gray-700 font-bold mb-2">
          Email address
        </label>
        <input
        type='email'
        placeholder="enter your Email address  "   
        className="border rounded w-full py-2 px-3"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        />

        
        {(!email.includes('.') || !email.includes('@')) && email.length > 0 && (
    <p className="text-red-500 text-sm mt-1">
        Email must include (.) and (@)
    </p>
)}

       </div>

       <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" > Password</label>
        <input 
        type={showPassword? "text":"password"}
        placeholder="enter Password"
        className="border rounded w-full py-2 px-3"
        value={password}
        onChange={ (e)=>{setPassword(e.target.value)}}
        onFocus={() => setShowPassword(true)}   
        onBlur={() => setShowPassword(false)}    

      />
       
        { 
          password.length>0 && password.length<10 &&(
            <p className="text-red-500 text-sm mt-1">
             password needs to be 10 characters at least 
            </p>
          ) 
        }
       </div>
       <button type="submit"  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-6"
       >
        submit
       </button>
      </form> 
       </div>
    )

    

}
export default SignInPage