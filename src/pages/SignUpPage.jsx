import React from "react";
import {useForm} from "react-hook-form"
import {Link, useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
const SignUpPage =()=>{
    const{register,handleSubmit ,watch,formState:{errors,isValid}}=useForm({mode: "onChange"})

    const navigate =useNavigate();
    const onSubmit=(data)=>{

        toast.success("Account created succesfully");
     return setTimeout(() => {
    navigate("/");
       
  }, 2000);
    
    }
   


    
    return( 
    <div className="container m-auto max-w-2xl py-24">
    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form onSubmit={handleSubmit (onSubmit)}  >

             <h2 className="text-3xl text-center font-semibold mb-6">
              Sign Up 
              
            </h2>

            {/* email */}
            <label className="block text-gray-700 font-bold mb-2 ">Email</label>
            <input
            type="email"
            placeholder="Enter your email"
            className="border rounded w-full py-2 px-3"
            {...register("signupemail" ,{required: "email is required",
            pattern:{
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:"Email is invalid "

            },
        })}
             

             />
           {errors.signupemail && (<p className="text-red-500 text-sm mt-2">
                   {errors.signupemail.message}</p>)} 

             {/* username */}
            <label className="block text-gray-700 font-bold mb-2 mt-2">Username</label>
            <input
            type="text"
            placeholder="Enter your user name "
            className="border rounded w-full py-2 px-3"
            {...register("username" ,
            {required: "username is required",
            minLength :{
                value:4,
                message:"Username must be at least 4 characters"

            },
        })}


             />
             {errors.username&& (<p className="text-red-500 text-sm mt-2 ">
              {  errors.username.message}</p>)}
             {/* password */}
            <label className="block text-gray-700 font-bold mb-2 mt-2">Password</label>
            <input
            type="password"
            placeholder="Enter your password "
            className="border rounded w-full py-2 px-3"
            {...register("password" ,{required: "password is required",
            minLength :{
                value: 8 ,
                message:"Password must be at least 8 characters"

            },
        })}


             />
             {errors.password&& (<p className="text-red-500 text-sm mt-2 ">{errors.password.message}</p>)}
             {/* cofirmpassowrd */}
            <label className="block text-gray-700 font-bold mb-2 mt-2 ">Confirm password</label>
            <input
            type="password"
            placeholder="Check password "
            className="border rounded w-full py-2 px-3"
            {...register("confirmpassword" ,
            {required: "password is required",
           validate:(value)=>{
          return  value === watch("password")|| "Password does not match " 
           }
               
        },
        )}


             />
             {errors.confirmpassword&& (<p className="text-red-500 text-sm mt-2 ">
               { errors.confirmpassword.message}</p>)}
            
             <button type="submit" 
            disabled={!isValid }
            className={`w-full py-2 px-4 mt-6 rounded-full text-white font-bold ${
              !isValid  ? "bg-red-500 hover:bg-red-400 cursor-pointer "   :" bg-red-500 hover:bg-red-600 cursor-pointer "
          }`}>
              Singn Up
             </button>
          
             <p className="text-sm text-blue-400 my-4">
                Already have account?
             </p>
             <Link to ="/signin" className="text-sm text-blue-400"> Log in here</Link>>
          
        </form>
    </div>



    </div>
    )
}
export default SignUpPage ;
