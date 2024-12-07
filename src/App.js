import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './frontend/components/Navbar'; 
import Banner from './frontend/components/Banner'; 
import Categories from './frontend/components/Categories'; 
import NavigationPanel from './frontend/components/NavigationPanel'; 
import { darkThemeColors, lightThemeColors } from './frontend/components/theme'; 
import WishList from './frontend/pages/WishList'; 
import Cart from './frontend/pages/Cart'; 
import Notifications from './frontend/pages/Notifications';
import Profile from './frontend/pages/Profile';
import Register from './frontend/pages/Register';


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
