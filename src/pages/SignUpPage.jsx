import React from "react";
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
const SignUpPage=()=>{
    const{register,handleSubmit ,watch,formState:{errors}}=useForm()

    const navigate =useNavigate();
    const onSubmit=(data)=>{
      navigate('/')
    }
 

    
    return( 
    <div className="container m-auto max-w-2xl py-24">
    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form onSubmit={handleSubmit (onSubmit)}  >
            {/* <h2 className="text-3xl text-center font-semibold mb-6">
                this is  Sign Up page 
            </h2>
            {/* email */}
            <label className="block text-gray-700 font-bold mb-2 ">Email</label>
            <input
            type="email"
            placeholder="enter your email"
            className="border rounded w-full py-2 px-3"
            {...register("signupemail" ,{required: "email is required",
            pattern:{
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:"email is invalid "

            },
        })}
             

             />
{errors.signupemail && (<p className="text-red-500 text-sm mt-2">
    {errors.signupemail.message}</p>)} 

             {/* username */}
            <label className="block text-gray-700 font-bold mb-2 ">Username</label>
            <input
            type="text"
            placeholder="enter your user name "
            className="border rounded w-full py-2 px-3"
            {...register("username" ,
            {required: "username is required",
            minLength :{
                value:4,
                message:"username must be at least 4 characters"

            },
        })}


             />
             {errors.username&& (<p className="text-red-500 text-sm mt-2 ">
              {  errors.username.message}</p>)}
             {/* password */}
            <label className="block text-gray-700 font-bold mb-2 ">Password</label>
            <input
            type="password"
            placeholder="enter your password "
            className="border rounded w-full py-2 px-3"
            {...register("password" ,{required: "password is required",
            minLength :{
                value: 4 ,
                message:"password must be at least 10 characters"

            },
        })}


             />
             {errors.password&& (<p className="text-red-500 text-sm mt-2 ">{errors.password.message}</p>)}
             {/* cofirmpassowrd */}
            <label className="block text-gray-700 font-bold mb-2 ">Confirm password</label>
            <input
            type="password"
            placeholder="check password "
            className="border rounded w-full py-2 px-3"
            {...register("confirmpassword" ,
            {required: "password is required",
           validate:(value)=>{
            value === watch("password")|| "password does not match " 
           }
               
        },
        )}


             />
             {errors.confirmpassword&& (<p className="text-red-500 text-sm mt-2 ">
               { errors.confirmpassword.message}</p>)}
            
             <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-6">
                Confirm
             </button>

        </form>
    </div>



    </div>
    )
}
export default SignUpPage;
