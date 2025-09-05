import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"

const SignInPage =()=>{
  
 const {register,handleSubmit ,formState: { errors }}=useForm();
 const navigate= useNavigate();

 const onSubmit = (data) => {
  toast.success("Done succesfully");

  return setTimeout(() => {
    navigate("/");
    
  }, 1000);
};


 
  

    return(
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-3xl text-center font-semibold mb-6">
            tis is sign In page
            </h2>

            {/* email */}

            <label className="block text-gray-700 font-bold mb-2 " >Email</label>
            <input type="email" 
            placeholder="enter your email"
            {...register("email", {
              required: "Email is required",
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
            placeholder="enter password"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 10,
                message: "Password must be at least 10 characters",
              },
            })}
            className="border rounded w-full py-2 px-3"/>
            
            {errors.password&&(
           <p className="text-red-500 text-sm mt-2">
           {errors.password.message}
           </p>   
            )}

             <div>
              <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-6">
                submit
              </button>
            </div>
            
            </form>
            </div> 
           

      </div>
    )

    

}
export default SignInPage