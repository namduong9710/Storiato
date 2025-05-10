"use client"; // Make it a Client Component

import React, { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation'; // Import navigation hooks
import { SunIcon, MoonIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Using Heroicons

const Header = () => {
  const [theme, setTheme] = useState('light'); // Default theme
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams?.get('q') || ''; // Get initial query from URL
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  // Update state if the URL query changes (e.g., browser back/forward on search page)
  useEffect(() => {
      setSearchQuery(searchParams?.get('q') || '');
  }, [searchParams]);

  // Effect to apply theme class to HTML element
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
        // Close mobile menu if open
        setIsMobileMenuOpen(false);
        // Navigate to search results page
        router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    } else {
        // Optional: navigate to search page even if empty, or clear input
        router.push('/search'); // Navigate to base search page if query is empty
    }
  };

  const navLinks = [
    { href: '/browse', label: 'Browse Genres' },
    { href: '/completed', label: 'Completed Stories' }, // TODO: Create this page
    { href: '/community', label: 'Community' },
    // TODO: Add Login/Signup/Profile links based on auth state
  ];

  return (
    <header className="sticky top-0 z-30 w-full bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Storiato
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-grow max-w-xl mx-4">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="search"
              name="q" // Add name attribute for forms
              placeholder="Search stories, authors, or genres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-1.5 pl-10 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 text-sm"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
            <button type="submit" className="sr-only">Search</button> {/* Screen reader accessible submit */}
          </form>
        </div>

        {/* Desktop Navigation & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <nav className="space-x-4">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                {link.label}
              </Link>
            ))}
            {/* TODO: Add Login/Signup/Profile link here */}
            <Link href="/profile" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Login/Signup</Link>
          </nav>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="md:hidden flex items-center space-x-2">
           <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-1.5 rounded text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-4 py-4 space-y-3">
             {/* Mobile Search Bar */}
             <form onSubmit={handleSearchSubmit} className="relative w-full mb-3">
                <input
                  type="search"
                  name="q"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-1.5 pl-10 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 text-sm"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                 <button type="submit" className="sr-only">Search</button> {/* Screen reader accessible submit */}
              </form>
            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-2">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  {link.label}
                </Link>
              ))}
              {/* TODO: Add Login/Signup/Profile link here */}
              <Link href="/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Login/Signup</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 