import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Categories from './components/Categories';


const App = (  ) => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <main className="px-[20%] dark:bg-gray-900 dark:text-gray-200">
        <Banner darkTheme={darkTheme}/>
        <Categories darkTheme={darkTheme}/>
      </main>
    </div>
  );
};

export default App;
