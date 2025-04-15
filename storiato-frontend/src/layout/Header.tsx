import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-gray-300">
          Storiato
        </Link>
        {/* TODO: Add navigation links (Genres, Search, Login/Profile) */}
        <div>
          <input
            type="text"
            placeholder="Search stories..."
            className="px-2 py-1 rounded text-black mr-2"
          />
          {/* Placeholder for future components */}
          <span className="mr-4 cursor-pointer hover:text-gray-300">Genres</span>
          <span className="cursor-pointer hover:text-gray-300">Login</span>
        </div>
      </nav>
    </header>
  );
};

export default Header; 