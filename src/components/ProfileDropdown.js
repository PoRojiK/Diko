import React from 'react';
import {
  AiOutlineUser,
  AiOutlineNotification,
  AiOutlineSetting,
  AiOutlineLogout,
} from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { darkThemeColors, lightThemeColors } from './theme';

const ProfileDropdown = ({ darkTheme, handleThemeToggle }) => {
    const currentTheme = darkTheme ? darkThemeColors : lightThemeColors;
    return (
        <div
          className={`absolute  top-full right-0 shadow-md p-4 rounded-lg border z-10 ${currentTheme.input.background} ${currentTheme.input.border} ${currentTheme.text} w-64`}
        >
          {/* Profile and Notification */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AiOutlineUser className="text-lg mr-2" />
              <p className="text-lg">Профиль</p>
            </div>
            <AiOutlineNotification className="text-lg" />
          </div>
    
          {/* Settings */}
          <div
            className={`p-2 rounded-lg cursor-pointer flex items-center mt-1 transition ${currentTheme.text} hover:${currentTheme.textHover}`}
          >
            <AiOutlineSetting className="text-lg mr-2" />
            <button className="text-lg">Настройки</button>
          </div>
    
          {/* Logout */}
          <div
            className={`p-2 rounded-lg cursor-pointer flex items-center mt-1 transition ${currentTheme.text} hover:${currentTheme.textHover}`}
          >
            <AiOutlineLogout className="text-lg mr-2" />
            <button className="text-lg">Выйти</button>
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
        </div>
      );
    };
    
    export default ProfileDropdown;