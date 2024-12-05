import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/banners/Banner';


const App = (  ) => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <main className="px-[20%] dark:bg-gray-900 dark:text-gray-200">
        <Banner darkTheme={darkTheme}/>
      </main>
    </div>
  );
};

export default App;
