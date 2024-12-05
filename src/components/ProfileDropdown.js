import React from "react";
import {
  AiOutlineUser,
  AiOutlineNotification,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const ProfileDropdown = ({ darkTheme, handleThemeToggle }) => {
  return (
    <div
      className={`absolute top-full right-0 shadow-md p-4 rounded-lg border z-10 ${
        darkTheme ? "bg-black border-gray-800" : "bg-white border-gray-200"
      } w-64`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <AiOutlineUser
            className={`text-lg ${darkTheme ? "text-white" : "text-black"} mr-2`}
          />
          <p className={`text-lg ${darkTheme ? "text-white" : "text-black"}`}>
            Профиль
          </p>
        </div>
        <AiOutlineNotification
          className={`text-lg ${darkTheme ? "text-white" : "text-black"}`}
        />
      </div>

      <div
        className={`p-2 rounded-lg cursor-pointer flex items-center mt-1 transition ${
          darkTheme ? "hover:bg-gray-800" : "hover:bg-gray-200"
        }`}
      >
        <AiOutlineSetting
          className={`text-lg ${darkTheme ? "text-white" : "text-black"} mr-2`}
        />
        <button
          className={`text-lg ${darkTheme ? "text-white" : "text-black"}`}
        >
          Доставки
        </button>
      </div>

      <div
        className={`p-2 rounded-lg cursor-pointer flex items-center mt-1 transition ${
          darkTheme ? "hover:bg-gray-800" : "hover:bg-gray-200"
        }`}
      >
        <AiOutlineLogout
          className={`text-lg ${darkTheme ? "text-white" : "text-black"} mr-2`}
        />
        <button
          className={`text-lg ${darkTheme ? "text-white" : "text-black"}`}
        >
          Выйти
        </button>
      </div>

      <li
        onClick={handleThemeToggle}
        className={`p-2 rounded-lg cursor-pointer flex justify-between items-center transition mt-1 ${
          darkTheme ? "hover:bg-gray-800" : "hover:bg-gray-200"
        }`}
      >
        <span className="flex items-center space-x-2">
          <FaMoon
            className={`text-lg ${darkTheme ? "text-white" : "text-black"}`}
          />
          <span
            className={`text-lg ${darkTheme ? "text-white" : "text-black"}`}
          >
            Тёмная тема
          </span>
        </span>
        <label
          htmlFor="theme-toggle"
          className="relative inline-flex items-center cursor-pointer ml-4"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="checkbox"
            id="theme-toggle"
            className="sr-only peer"
            checked={darkTheme}
            onChange={handleThemeToggle}
          />
          <div
            className={`w-10 h-5 rounded-full outline-none peer transition-colors ${
              darkTheme
                ? "bg-purple-600"
                : "bg-gray-500 border border-gray-300"
            }`}
          ></div>
          <div className="mx-1 absolute w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-4 transition-transform"></div>
        </label>
      </li>
    </div>
  );
};

export default ProfileDropdown;
