import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import logo from "../icons/logo.svg";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);


  const handleThemeToggle = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <nav
      className={`px-[21%] flex justify-between items-center py-2 shadow-md ${
        darkTheme ? "bg-black" : "bg-white"
      }`}
    >
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "4rem", height: "3rem" }}
          className={darkTheme ? "invert" : ""}
        />
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="relative w-1/2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className={`w-full py-2 pl-10 text-sm ${
              darkTheme ? "text-gray-300" : "text-gray-700"
            } rounded-lg focus:outline-none focus:ring-2 ${
              darkTheme ? "focus:ring-gray-400" : "focus:ring-gray-600"
            } ${darkTheme ? "bg-gray-800" : "bg-gray-100"} border border-gray-300`}
          />
          <AiOutlineSearch
            className={`absolute top-1/2 transform -translate-y-1/2 left-3 text-lg ${
              darkTheme ? "text-gray-300" : "text-gray-700"
            }`}
          />
        </div>
      </div>
      <div className="flex items-center">
        <button className="mr-4">
          <AiOutlineHeart
            className={`text-3xl ${darkTheme ? "text-gray-300" : "text-gray-700"}`}
          />
        </button>
        <button className="mr-4">
          <AiOutlineShoppingCart
            className={`text-3xl ${darkTheme ? "text-gray-300" : "text-gray-700"}`}
          />
        </button>
        <button
          className="relative"
          onMouseEnter={() => setShowProfileDropdown(true)}
          onMouseLeave={() => setShowProfileDropdown(false)}
        >
          <AiOutlineUser
            className={`text-3xl ${darkTheme ? "text-gray-300" : "text-gray-700"}`}
          />
          {showProfileDropdown && (
            <ProfileDropdown 
              darkTheme={darkTheme}
              handleThemeToggle={handleThemeToggle}
            />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
