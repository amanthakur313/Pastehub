

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"; // Home icon
import { BiPaste } from "react-icons/bi"; // Paste icon
import { FaSun, FaMoon } from "react-icons/fa"; // Sun and Moon for dark mode toggle

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false); // Track dark mode state

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex flex-row justify-between items-center rounded-2xl">
      {/* Logo or App Name */}
      <div className="text-md font-semibold text-white flex pr-3">📝 PasteHub</div>

      <div className="flex flex-row gap-6 items-center">
        {/* Home Link */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-semibold underline"
              : "text-white hover:text-blue-300"
          }
        >
          <AiFillHome className="inline-block mr-1" />
          Home
        </NavLink>

        {/* Pastes Link */}
        <NavLink
          to="/pastes"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-semibold underline"
              : "text-white hover:text-blue-300"
          }
        >
          <BiPaste className="inline-block mr-1" />
          Pastes
        </NavLink>

        {/* Create Paste Button */}
        <NavLink
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          + New Paste
        </NavLink>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 text-white hover:text-yellow-500"
        >
          {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
