import React, { useState } from 'react';
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import logo from '../icons/logo.svg';
import ProfileDropdown from './ProfileDropdown';

const Navbar = ({ darkTheme, handleThemeToggle, currentTheme }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <div className={` sticky top-0 z-20`}>
    <nav
      className={`px-[21%] flex justify-between items-center py-2 shadow-sm ${currentTheme.background}`}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          style={{ width: '4rem', height: '3rem' }}
          className={darkTheme ? 'invert' : ''}
        />
      </div>

      {/* Search Bar Section */}
      <div className="flex items-center justify-center w-full">
        <div className="relative w-1/2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className={`w-full py-2 pl-10 text-sm ${currentTheme.input.text} rounded-lg focus:outline-none focus:ring-2 ${currentTheme.input.focusRing} ${currentTheme.input.background} ${currentTheme.input.border}`}
          />
          <AiOutlineSearch
            className={`absolute top-1/2 transform -translate-y-1/2 left-3 text-lg ${currentTheme.text}`}
          />
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex items-center">
        <button className="mr-4">
          <AiOutlineHeart className={`text-3xl ${currentTheme.icons.solo}`} />
        </button>
        <button className="mr-4">
          <AiOutlineShoppingCart
            className={`text-3xl ${currentTheme.icons.solo}`}
          />
        </button>
        <button
          className="relative"
          onMouseEnter={() => setShowProfileDropdown(true)}
          onMouseLeave={() => setShowProfileDropdown(false)}
        >
          <AiOutlineUser className={`text-3xl ${currentTheme.icons.solo}`} />
          {showProfileDropdown && (
            <ProfileDropdown
              darkTheme={darkTheme}
              handleThemeToggle={handleThemeToggle}
            />
          )}
        </button>
      </div>
      
    </nav>
    <div className={`absolute top-full left-0 w-full h-2 shadow-2xl`} ></div>

    </div>
  );
};

export default Navbar;
