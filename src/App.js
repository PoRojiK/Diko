import React from 'react';
import Header from './components/Header';

function App() {
  const isLoggedIn = true;
  const user = { name: "Григорий", bonuses: 600 };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} user={user} />
    </div>
  );
}

export default App;