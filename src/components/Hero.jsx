import React from "react";
import { useState } from "react";
import axios from "axios";

const Hero = () => {
  const[responseMessage,setResponseMessage]=useState("");
  // const b =async()=>{
  //   try {
  //     const res = await axios.get("https://jobs-application-backend.vercel.app/api/hello");
  //     setResponseMessage(res.data.message);
  //   } catch (err) {
  //     console.error("Error fetching data:", err);
  //     setResponseMessage("Failed to fetch message.");
  //   }
  // };
  const b =async()=>{
    try {
      const res = await fetch("https://jobs-application-backend.vercel.app/publicc/indeddx.html");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setResponseMessage(data.message);
    } catch (err) {
      console.error("Error fetching data:", err);
      setResponseMessage("Failed to fetch message.");
    }
  };
  return (
    <section className="bg-red-700 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Become a React Dev
          </h1>
          <p className="my-4  text-xl text-white">
            Find the React job that fits your skills and needs
          </p>
          <div className="flex flex-col sm:flex-row sm:ml-[130px] items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <p className="text-white text-sm  "> {responseMessage|| "Click the button"}</p>
        <button onClick={b} className="bg-white text-red-700 text-sm   px-3 py-1 rounded-lg">
          Send request
        </button>
      </div>
    
      </div>

      </div>
    
      
      
    </section>
  );
};

export default Hero;
