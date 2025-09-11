import React from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import axios from "axios";



const SignInPage =()=>{
  
 const {register,handleSubmit ,formState: { errors,isValid }}=useForm({mode:"onChange"});
 const navigate= useNavigate();

 const onSubmit = async (data) => {
  try {
    const payload = {
      
      email: data.email,
      password: data.password,
     
    };

    const response = await axios.post("https://jobs-application-backend.vercel.app/api/signin", payload, {
      headers: { "Content-Type": "application/json" }
    });
    

    const result = response.data;


    console.log(" User:", result.user);
    console.log(" Token:", result.token);

   
    sessionStorage.setItem("token", result.token);

    toast.success("Login completed");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  } catch (err) {
    console.error(" Signip error:", err.response?.data?.message || err.message);
    toast.error("Signip failed");
  }
};


  

    return(
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-3xl text-center font-semibold mb-6">
          Sign In
            </h2>

            {/* email */}

            <label className="block text-gray-700 font-bold mb-2 " >Email</label>
            <input type="email" 
            placeholder="Enter your email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email ",
              },
            })}
            className="border rounded w-full py-2 px-3"
          
            />
      {errors.email&&(
        <p className="text-red-500 text-sm mt-2">
             {errors.email.message}
          </p>
            )} 

            {/* password */}

            <label className="block text-gray-700 font-bold mt-4 mb-2 " >Password</label>
            <input type="password" 
            placeholder="Enter password"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            className="border rounded w-full py-2 px-3"/>
            
            {errors.password&&(
           <p className="text-red-500 text-sm mt-2">
           {errors.password.message}
           </p>   
            )}

         <button type="submit" 
            disabled={!isValid }
            className={`w-full py-2 px-4 mt-6 rounded-full text-white font-bold ${
              !isValid  ? "bg-red-500 hover:bg-red-400 cursor-pointer "   :" bg-red-500 hover:bg-red-600  cursor-pointer " }`}>
               Sign In
             </button>
            <Link to="/signup" className="text-sm text-blue-400">
            I don't have account !
            </Link>
            </form>
            </div> 
           

      </div>
    )

    

}
export default SignInPage