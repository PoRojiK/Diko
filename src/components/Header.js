import React from 'react';

import HeartIcon from '../icons/heart.svg';
import CartIcon from '../icons/cart.svg';
import Logo from '../icons/logo.svg';

const Header = ({ isLoggedIn, user }) => {
  return (
    <header className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <img src={Logo} alt="Logo" className="h-8" />
      <div className="flex items-center bg-blue-800 rounded-md">
        <input
          type="text"
          placeholder="Поиск"
          className="bg-blue-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
        />
        <button className="bg-blue-700 hover:bg-blue-900 px-4 py-2 rounded-r-md">НАЙТИ</button>
      </div>
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <div className="flex items-center space-x-2">
            <span className="bg-yellow-400 text-blue-600 px-2 py-1 rounded-md font-bold">
              {user.bonuses}₽
            </span>
            <span>{user.name}</span>
          </div>
        ) : (
          <button className="hover:text-gray-300">Войти</button>
        )}
        <HeartIcon className="w-6 h-6 fill-current text-white hover:text-gray-300" />
        <CartIcon className="w-6 h-6 fill-current text-white hover:text-gray-300" />
      </div>
    </header>
  );
};

export default Header;