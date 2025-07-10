
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiPaste } from "react-icons/bi";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // ✅ Load from localStorage or default to false
    return localStorage.getItem("darkMode") === "true";
  });

  // ✅ Apply class on first load
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode); // ✅ Save choice
  };

  return (
    <header className="bg-gray-900 text-white shadow-md py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center rounded-2xl">
        <div className="text-lg font-bold text-white flex items-center">
          📝 PasteHub
        </div>

        <nav className="flex flex-wrap gap-4 md:gap-6 items-center">
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

          <NavLink
            to="/"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm font-medium"
          >
            + New Paste
          </NavLink>

          <button
            onClick={toggleDarkMode}
            className="text-white hover:text-yellow-400 text-xl"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
