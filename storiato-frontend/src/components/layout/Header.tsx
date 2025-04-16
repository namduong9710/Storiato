"use client"; // Make it a Client Component

import React, { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation'; // Import hooks for navigation and reading params

const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams?.get('q') || ''; // Get initial query from URL if present
  const [searchQuery, setSearchQuery] = useState(initialQuery);

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
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50"> {/* Made header sticky */}
      <nav className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4"> {/* Added flex-wrap and gap */}
        <Link href="/" className="text-xl font-bold hover:text-gray-300 whitespace-nowrap">
          Storiato
        </Link>

        {/* Search Form */}
        <form onSubmit={handleSearchSubmit} className="flex-grow md:flex-grow-0 md:order-last"> {/* Order last on medium screens */}
          <input
            type="text"
            placeholder="Tìm truyện..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-1.5 rounded-l text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 sm:w-64" // Adjusted padding and width
          />
          <button
            type="submit"
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-r text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Tìm
          </button>
        </form>

        {/* Navigation Links & Auth */}
        <div className="flex items-center gap-4 text-sm whitespace-nowrap">
           {/* TODO: Replace with actual genre dropdown/link */}
          <span className="cursor-pointer hover:text-gray-300">Thể Loại</span>

          {/* Auth Links Placeholder */}
          {/* TODO: Add logic to show Profile/Logout when logged in */}
          <div className="flex items-center gap-3">
             <Link href="/dang-nhap" className="hover:text-gray-300"> {/* Link to login page */}
                Đăng Nhập
             </Link>
             <span className="text-gray-500">|</span> {/* Separator */}
             <Link href="/dang-ky" className="hover:text-gray-300"> {/* Link to register page */}
                 Đăng Ký
             </Link>
          </div>
          {/* <span className="cursor-pointer hover:text-gray-300">Đăng Nhập</span> */}
        </div>
      </nav>
    </header>
  );
};

export default Header; 