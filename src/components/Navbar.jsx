import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-10">
      <div className="flex justify-between px-4 mx-auto lg:max-w-7xl items-center md:px-8">
        {/* Brand/Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center np-gr py-3 md:py-5">
          <span className="np-gr pr-1">Explore Nepal</span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-white bg-blue-900 rounded-md focus:border-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className={`hidden md:flex flex-1 justify-center space-x-6`}>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-black hover:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-black hover:text-red-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/tours" className="text-black hover:text-red-500">
                Tours
              </Link>
            </li>
            <li>
              <Link to="/HillStation" className="text-black hover:text-red-500">
                HillStation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pt-4 pb-4 bg-white">
          <Link to="/" onClick={toggleMenu} className="text-black hover:text-red-500">
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu} className="text-black hover:text-red-500">
            About
          </Link>
          <Link to="/tours" onClick={toggleMenu} className="text-black hover:text-red-500">
            Tours
          </Link>
          <Link to="/hill_station" onClick={toggleMenu} className="text-black hover:text-red-500">
            HillStation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
