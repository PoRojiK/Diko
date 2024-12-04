import React, { useState } from 'react';
import Header from './components/Header';


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-md"
      >
        {isDarkMode ? 'Светлая тема' : 'Тёмная тема'}
      </button>
      <Header isLoggedIn={true} user={{ name: 'Григорий', bonuses: 600 }} />
      <main className="px-[15%] dark:bg-gray-900 dark:text-gray-200">
        {/* Ваш контент */}
        <h1>Добро пожаловать в интернет-магазин</h1>
      </main>
    </div>
  );
};

export default App;
