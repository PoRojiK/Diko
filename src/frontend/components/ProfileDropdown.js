import React from 'react';
import {
  AiOutlineUser,
  AiOutlineBell,
  AiOutlineTruck,
  AiOutlineSetting,
  AiOutlineLogout,
} from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { darkThemeColors, lightThemeColors } from './theme.js';

const ProfileDropdown = ({ darkTheme, handleThemeToggle }) => {
    const currentTheme = darkTheme ? darkThemeColors : lightThemeColors;
    return (
        <div
          className={`absolute  top-full right-0 shadow-md p-4 rounded-lg border z-10 ${currentTheme.input.background} ${currentTheme.input.border} ${currentTheme.text} w-64`}
        >
        <div>

        <div className="flex items-center justify-between p-2 rounded-lg">
          {/* Profile */}
          <div
            className={`flex items-center cursor-pointer transition ${currentTheme.text} hover:${currentTheme.textHover}`}
          >
            <AiOutlineUser className="text-2xl mr-2" />
            <span className="text-lg font-medium">Профиль</span>
          </div>

          {/* Notifications */}
          <button
            className={`p-2 rounded-lg cursor-pointer flex items-center justify-center transition ${currentTheme.text} hover:bg-gray-200 hover:${currentTheme.textHover}`}
          >
            <AiOutlineBell className="text-2xl" />
          </button>
        </div>


          {/* Delivery */}
          <div
            className={`p-2 rounded-lg cursor-pointer flex items-center mt-1 transition ${currentTheme.text} hover:${currentTheme.textHover}`}
          >
            <AiOutlineTruck className="text-lg mr-2" />
            <span className="text-lg ">Доставка</span>
          </div>

          {/* Settings */}
          <div
            className={`p-2 rounded-lg cursor-pointer flex items-center mt-1 transition ${currentTheme.text} hover:${currentTheme.textHover}`}
          >
            <AiOutlineSetting className="text-lg mr-2" />
            <span className="text-lg ">Настройки</span>
          </div>
        </div>

    

    
          {/* Theme Toggle */}
          <li
            onClick={handleThemeToggle}
            className={`p-2 rounded-lg cursor-pointer flex justify-between items-center transition mt-1 ${currentTheme.text} hover:${currentTheme.textHover}`}
          >
            <span className="flex items-center space-x-2">
              <FaMoon className="text-lg" />
              <span className="text-lg">Тёмная тема</span>
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
                className={`w-10 h-4 rounded-full peer ${
                    darkTheme ? 'bg-purple-600' : 'bg-gray-400'
                }`}
              ></div>
                <div
    className={`absolute w-5 h-5 rounded-full border-2 transform transition-transform peer-checked:translate-x-[1.5rem] ${
      darkTheme
        ? 'bg-custom-darkGray border-purple-600'
        : 'bg-white border-gray-400'
    }`}
  ></div>
            </label>
          </li>

          {/* Logout */}
          <div
            className={`p-2 rounded-lg cursor-pointer flex items-center mt-1 transition ${currentTheme.text} hover:${currentTheme.textHover}`}
          >
            <AiOutlineLogout className="text-lg mr-2" />
            <button className="text-lg">Выйти</button>
          </div>

        </div>
      );
    };
    
    export default ProfileDropdown;