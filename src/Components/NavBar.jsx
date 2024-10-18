import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa"; 

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex py-5 px-6 justify-between bg-white font-outfit shadow-md">
        <Link to={"/"}>
          <div className="logo text-xl font-bold">LOGO</div>
        </Link>

        <div className="hidden md:flex md:gap-8 items-center">
          {" "}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 underline underline-offset-4"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          {/* <NavLink
            to="/create-resume"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 underline underline-offset-4' : 'text-gray-700 hover:text-blue-600'
            }
          >
            Create Resume
          </NavLink> */}
          <NavLink
            to="/templates"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 underline underline-offset-4"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Choose Template
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 underline underline-offset-4"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            About WebApp
          </NavLink>
          {/* Button */}
          <Button Title="Contact" />
        </div>

        {/* Hamburger icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="bg-white shadow-lg md:hidden">
          {" "}
          {/* Absolute positioning removed */}
          <ul className="flex flex-col px-6 gap-3 py-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 underline underline-offset-4"
                  : "text-gray-700 hover:text-blue-600"
              }
              onClick={toggleMenu} // Close menu on click
            >
              Home
            </NavLink>
            <NavLink
              to="/create-resume"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 underline underline-offset-4"
                  : "text-gray-700 hover:text-blue-600"
              }
              onClick={toggleMenu}
            >
              Create Resume
            </NavLink>
            <NavLink
              to="/templates"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 underline underline-offset-4"
                  : "text-gray-700 hover:text-blue-600"
              }
              onClick={toggleMenu}
            >
              See Templates
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 underline underline-offset-4"
                  : "text-gray-700 hover:text-blue-600"
              }
              onClick={toggleMenu}
            >
              About WebApp
            </NavLink>
            <Button Title="Contact" />
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
