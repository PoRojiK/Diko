import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './frontend/components/Navbar.js'; 
import Banner from './frontend/components/Banner.js'; 
import Categories from './frontend/components/Categories.js'; 
import NavigationPanel from './frontend/components/NavigationPanel.js'; 
import { darkThemeColors, lightThemeColors } from './frontend/components/theme.js'; 
import WishList from './frontend/build/WishList.js'; 
import Cart from './frontend/build/Cart.js'; 
import Notifications from './frontend/build/Notifications.js';
import Profile from './frontend/build/Profile.js';
import Register from './frontend/build/Register.js';



const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const currentTheme = darkTheme ? darkThemeColors : lightThemeColors;

  const handleThemeToggle = () => setDarkTheme(!darkTheme);

  return (
    <Router>
      <div className={`${currentTheme.mainBackground} ${currentTheme.text} min-h-screen`}>
        <Navbar 
          darkTheme={darkTheme} 
          handleThemeToggle={handleThemeToggle} 
          currentTheme={currentTheme} 
        />
        
        <NavigationPanel currentTheme={currentTheme} />

        <main className="px-[20%]">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Banner currentTheme={currentTheme} />
                  <Categories currentTheme={currentTheme} />
                </>
              } 
            />
            <Route path="/wish-list" element={<WishList currentTheme={currentTheme} />} />
            <Route path="/cart" element={<Cart currentTheme={currentTheme} />} />
            <Route path="/profile" element={<Profile currentTheme={currentTheme} />} />
            <Route path="/notifications" element={<Notifications currentTheme={currentTheme} />} />
            <Route path="/register" element={<Register currentTheme={currentTheme} />} />


          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
