import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';


const App = () => {
  return (
    <div>
      <Navbar />
      <main className="px-[20%] dark:bg-gray-900 dark:text-gray-200">
        <Banner />
      </main>
    </div>
  );
};

export default App;
