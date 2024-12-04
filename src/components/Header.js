import React, { useState } from 'react';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <nav
      className={`px-[20%] flex justify-between items-center py-4 shadow-md ${
        darkTheme ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="flex items-center pl-4">
        <div
          className={`border-2 border-dashed rounded-xl w-8 h-8 ${
            darkTheme ? 'bg-gray-600' : 'bg-gray-200'
          }`}
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
              darkTheme ? 'text-gray-300' : 'text-gray-700'
            } rounded-lg focus:outline-none focus:ring-2 ${
              darkTheme ? 'focus:ring-gray-400' : 'focus:ring-gray-600'
            } ${darkTheme ? 'bg-gray-800' : 'bg-gray-100'} border border-gray-300`}
          />
          <div className="absolute top-1/2 transform -translate-y-1/2 left-3">
            <div
              className={`border-2 border-dashed rounded-xl w-4 h-4 ${
                darkTheme ? 'bg-gray-600' : 'bg-gray-200'
              }`}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center pr-4">
        <button className="mr-4">
          <div
            className={`border-2 border-dashed rounded-xl w-6 h-6 ${
              darkTheme ? 'bg-gray-600' : 'bg-gray-200'
            }`}
          />
        </button>
        <button className="mr-4">
          <div
            className={`border-2 border-dashed rounded-xl w-6 h-6 ${
              darkTheme ? 'bg-gray-600' : 'bg-gray-200'
            }`}
          />
        </button>
        <button
          className="relative"
          onMouseEnter={() => setShowProfileDropdown(true)}
          onMouseLeave={() => setShowProfileDropdown(false)}
        >
          <div
            className={`border-2 border-dashed rounded-xl w-6 h-6 ${
              darkTheme ? 'bg-gray-600' : 'bg-gray-200'
            }`}
          />
          {showProfileDropdown && (
            <div
              className={`absolute top-full right-0 shadow-md p-4 ${
                darkTheme ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <p
                className={`text-sm ${
                  darkTheme ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Бонусы: 
              </p>
              <button
                className={`block w-full py-2 text-sm ${
                  darkTheme ? 'text-gray-300' : 'text-gray-700'
                } hover:bg-gray-100`}
              >
                View Profile
              </button>
              <button
                className={`block w-full py-2 text-sm ${
                  darkTheme ? 'text-gray-300' : 'text-gray-700'
                } hover:bg-gray-100`}
              >
                Выйти
              </button>
              <button
                className={`block w-full py-2 text-sm ${
                  darkTheme ? 'text-gray-300' : 'text-gray-700'
                }`}
                onClick={() => setDarkTheme(!darkTheme)}
              >
                {darkTheme ? 'Светлая тема' : 'Тёмная тема'}
              </button>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;
