import React from 'react';

const Notifications = ({ currentTheme }) => (
  <div className={`${currentTheme.mainBackground} ${currentTheme.text} min-h-screen`}>
    <h1 className="text-center text-2xl font-bold my-10">Cart</h1>
    <p className="text-center">You need to log in to view your cart.</p>
  </div>
);

export default Notifications;
