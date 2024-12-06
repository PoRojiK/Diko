import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Categories from './components/Categories';
import NavigationPanel from './components/Navigationpanel';
import { darkThemeColors, lightThemeColors } from './components/theme';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const currentTheme = darkTheme ? darkThemeColors : lightThemeColors;

  const handleThemeToggle = () => setDarkTheme(!darkTheme);

  return (
    <div className={`${currentTheme.mainBackground} ${currentTheme.text} min-h-screen`}>
      <Navbar
        darkTheme={darkTheme}
        handleThemeToggle={handleThemeToggle}
        currentTheme={currentTheme}
      />
      <NavigationPanel currentTheme={currentTheme} />
      <main className="px-[20%]">
        <Banner currentTheme={currentTheme} />
        <Categories currentTheme={currentTheme} />
      </main>
    </div>
  );
};

export default App;
