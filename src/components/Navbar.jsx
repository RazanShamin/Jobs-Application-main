import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
  
    { to: "/jobs",  label: "Jobs" },
    { to: "/add-job", label: "Add Job" },
    { to: "/signin", label: "Sign In" },
    // { to: "/signup", label: "Sign Up" },
  ];

  

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-red-900 hover:bg-red-600 rounded-md px-3 py-2 block "
      : "text-white hover:bg-red-500 rounded-md px-2 py-2 block ";

  return (
    <nav className="bg-red-700 border-b border-red-500 relative">
      <div className="max-w-7xl mx-auto   px-4 sm:px-6 lg:px-8 flex  justify-between  ">


       
        <div className="flex items-center  h-20">
        
          <div   className="flex  ">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <Link to ="/"   className="text-white text-2xl font-bold ml-4  md:block">
              Razan Jobs
            </Link>
          </div> 
         </div>
      
          <div className="md:hidden my-auto ">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white  text-3xl fixed top-4 right-4 z-50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
       

    
        < div className="hidden m-auto md:flex mr-0 space-x-4 ">
          {navLinks.map((link) => (
            <NavLink  key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

 
      
        {menuOpen && (
          <div className="  md:hidden absolute top-10 right-10 rounded-md shadow-lg  bg-red-600 px-4 pb-4 z-50 space-y-4">
            <div className=" items-end space-y-1">
              <Link to="/" className="fixed text-white text-2xl font-bold"> </Link>
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} onClick={()=> setMenuOpen(!menuOpen)} className={linkClass}>
                  {link.label}
                </NavLink>

               

              ))}
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
