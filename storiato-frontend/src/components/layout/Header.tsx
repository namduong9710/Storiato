"use client"; // Make it a Client Component

import React, { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation'; // Import hooks for navigation and reading params
import { useTheme } from '@/context/ThemeContext'; // Import useTheme hook
// Import necessary icons from Heroicons
import { SunIcon, MoonIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams?.get('q') || ''; // Get initial query from URL if present
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const { theme, toggleTheme } = useTheme(); // Get theme state and toggle function

  // Update state if the URL query changes (e.g., browser back/forward)
  useEffect(() => {
      setSearchQuery(searchParams?.get('q') || '');
  }, [searchParams]);

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      // Navigate to the search page with the query parameter
      router.push(`/tim-kiem?q=${encodeURIComponent(trimmedQuery)}`);
    } else {
      // Optional: navigate to search page even if empty, or just clear input
      router.push('/tim-kiem');
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md sticky top-0 z-50 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* Logo (Left) */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity">
            Storiato
          </Link>
        </div>

        {/* Search Bar (Center) - Allow growing */}
        <div className="flex-1 flex justify-center px-4 md:px-8">
          <form onSubmit={handleSearchSubmit} className="w-full max-w-lg relative">
            <input
              type="text"
              placeholder="Search stories, authors, or genres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
             {/* Submit button is visually hidden but accessible */}
             <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 sr-only">Search</button>
          </form>
        </div>

        {/* Navigation Menu & Theme Toggle (Right) */}
        <div className="flex-shrink-0 flex items-center gap-3 md:gap-4">
            {/* Navigation Links - hidden on smaller screens, shown on md+ */}
            <div className="hidden md:flex items-center gap-3 md:gap-4 text-sm font-medium">
                <Link href="/the-loai" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Browse Genres</Link>
                <Link href="/truyen-full" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Completed Stories</Link>
                {/* <Link href="/cong-dong" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Community</Link> */}
            </div>

             {/* Separator - hidden on smaller screens */}
             <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

             {/* Auth Links */}
              {/* TODO: Add logic to show Profile/Logout when logged in */}
             <div className="flex items-center gap-2 md:gap-3 text-sm font-medium">
                 <Link href="/dang-nhap" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Login</Link>
                 <span className="text-gray-400 dark:text-gray-600">/</span>
                 <Link href="/dang-ky" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Signup</Link>
             </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 focus:ring-blue-500"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <MoonIcon className="h-5 w-5" />
            ) : (
              <SunIcon className="h-5 w-5" />
            )}
          </button>
           {/* TODO: Add Mobile Menu Toggle Button for smaller screens */}
        </div>

      </nav>
       {/* TODO: Add Mobile Menu Drawer */}
    </header>
  );
};

export default Header; 