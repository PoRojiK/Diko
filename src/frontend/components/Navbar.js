import React, { useEffect, useState } from 'react';
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'; // Для навигации
import logo from '../icons/logo.svg';
import ProfileDropdown from './ProfileDropdown';
import { fetchUserData } from '../services/userService'; // Сервис для получения данных пользователя

const Navbar = ({ darkTheme, handleThemeToggle, currentTheme }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [user, setUser] = useState(null); // Данные пользователя
  const [favoritesCount, setFavoritesCount] = useState(0); // Количество избранных товаров
  const [cartCount, setCartCount] = useState(0); // Количество товаров в корзине
  const [notificationsCount, setNotificationsCount] = useState(0); // Количество уведомлений

  const navigate = useNavigate(); // Хук для навигации

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await fetchUserData(); // Запрос к API для получения данных
        setUser(userData);
        setFavoritesCount(userData.favorites?.length || 0);
        setCartCount(userData.cart?.length || 0);
        setNotificationsCount(userData.notifications?.length || 0);
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };

    loadUserData();
  }, []);

  const handleNavigation = (path) => {
    if (!user) {
      navigate(path, { state: { requiresAuth: true } }); // Передача состояния
    } else {
      navigate(path);
    }
  };

  return (
    <div className={`sticky top-0 z-20`}>
      <nav
        className={`px-[21%] flex justify-between items-center py-2 shadow-sm ${currentTheme.background}`}
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo}
            onClick={() => handleNavigation('/')}
            alt="Logo"
            style={{ width: '4rem', height: '3rem', cursor: 'pointer' }}
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
          {/* Favorites Icon */}
          <button
            className="relative mr-4"
            onClick={() => handleNavigation('/wish-list')}
          >
            <AiOutlineHeart className={`text-3xl ${currentTheme.icons.solo}`} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Cart Icon */}
          <button
            className="relative mr-4"
            onClick={() => handleNavigation('/cart')}
          >
            <AiOutlineShoppingCart
              className={`text-3xl ${currentTheme.icons.solo}`}
            />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile Icon */}
          <button
            className="relative"
            
            onMouseEnter={() => setShowProfileDropdown(true)}
            onMouseLeave={() => setShowProfileDropdown(false)}
          >
            <AiOutlineUser onClick={() => handleNavigation('/profile')} className={`text-3xl ${currentTheme.icons.solo}`} />
            {notificationsCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {notificationsCount}
              </span>
            )}
            {showProfileDropdown && (
              <ProfileDropdown
                darkTheme={darkTheme}
                handleThemeToggle={handleThemeToggle}
              />
            )}
          </button>
        </div>
      </nav>
      <div className={`absolute top-full left-0 w-full h-2 shadow-2xl`} />
    </div>
  );
};

export default Navbar;
