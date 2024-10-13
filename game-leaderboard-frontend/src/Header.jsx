import React from 'react';
import panteonLogo from './assets/panteon-black.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 w-full bg-black border-b border-b-gray-600">
      <div className="flex items-center">
        <img
          src={panteonLogo}
          alt="Panteon Logo"
          className="logo hover:scale-110 transition-transform duration-300 ease-in-out"
          width={100}
          height={70}
        />
      </div>
      <div className="flex-grow text-center">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-main animated-title">
          Leaderboard
        </h1>
      </div>
    </header>
  );
};

export default Header;
