import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/jobs", label: "Jobs" },
    { to: "/add-job", label: "Add Job" },
  ];

  const authLinks = [
    { to: "/signin", label: "Sign In" },
    { to: "/signup", label: "Sign Up" },
  ];

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-black hover:bg-gray-900 rounded-md px-3 py-2 block"
      : "text-white hover:bg-gray-900 rounded-md px-3 py-2 block";

  return (
    <nav className="bg-red-700 border-b border-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

       
        <div className="flex justify-between items-center h-20">
        
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-white text-2xl font-bold ml-2 hidden md:block">
              Razan Jobs
            </span>
          </a>

          <div className="hidden md:flex space-x-4">
            {authLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

      
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-3xl focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

    
        <div className="hidden md:flex justify-center mt-2 space-x-4">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

      
        {menuOpen && (
          <div className="md:hidden bg-red-700 px-4 pb-4 space-y-4">
            <div className="flex flex-col items-end space-y-1">
              {[...authLinks, ...navLinks].map((link) => (
                <NavLink key={link.to} to={link.to} className={linkClass}>
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
