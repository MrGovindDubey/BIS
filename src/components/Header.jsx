import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-between p-4 px-4 md:px-12 items-center border border-solid border-gray-300">
      <div className="logo flex justify-center items-center gap-2 md:gap-5">
        <img
          src="https://via.placeholder.com/60"
          alt="Logo"
          className="w-10 h-10 md:w-15 md:h-15"
        />
        <p className="font-semibold text-sm md:text-xl">
          Bureau of Indian Standards
        </p>
      </div>
      <div className="flex-grow"></div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 w-full md:w-auto mt-4 md:mt-0`}
      >
        <li>
          <a href="#" className="block py-2 md:py-0">
            About
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 md:py-0">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 md:py-0">
            Interactive
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 md:py-0">
            Contact
          </a>
        </li>
      </ul>
      <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm md:text-base w-full md:w-auto mt-4 md:mt-0">
        Explore BIS
      </button>
    </div>
  );
};

export default Header;
