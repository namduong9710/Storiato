"use client"; // Make it a Client Component

import React, { useState, useEffect } from 'react'; // Import useState
import Link from 'next/link';
import { Genre } from '@/types';

// Mock data for genres - potentially a longer list now
const mockGenres: Genre[] = [
    { id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' },
    { id: 'kiem-hiep', name: 'Kiếm Hiệp', slug: 'kiem-hiep' },
    { id: 'ngon-tinh', name: 'Ngôn Tình', slug: 'ngon-tinh' },
    { id: 'dam-my', name: 'Đam Mỹ', slug: 'dam-my' },
    { id: 'khoa-huyen', name: 'Khoa Huyễn', slug: 'khoa-huyen' },
    { id: 'huyen-huyen', name: 'Huyền Huyễn', slug: 'huyen-huyen' },
    { id: 'xuyen-khong', name: 'Xuyên Không', slug: 'xuyen-khong' },
    { id: 'do-thi', name: 'Đô Thị', slug: 'do-thi' },
    { id: 'quan-truong', name: 'Quan Trường', slug: 'quan-truong' },
    { id: 'vong-du', name: 'Võng Du', slug: 'vong-du' },
    { id: 'he-thong', name: 'Hệ Thống', slug: 'he-thong' },
    { id: 'di-gioi', name: 'Dị Giới', slug: 'di-gioi' },
    { id: 'nguoc', name: 'Ngược', slug: 'nguoc' },
    { id: 'sung', name: 'Sủng', slug: 'sung' },
    // Add more genres...
];

// Placeholder function - in a real app, this might fetch *all* genres now
async function getGenres(): Promise<Genre[]> {
    console.log("Fetching genres for NavBar (mock - client)");
    // Simulate fetching
    await new Promise(resolve => setTimeout(resolve, 50)); // Small delay
    return mockGenres;
}

const MAX_VISIBLE_GENRES = 8; // Show first 8 genres directly

const GenreNavBar = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [loading, setLoading] = useState(true);

     // Fetch data on client
    useEffect(() => {
        const loadGenres = async () => {
            setLoading(true);
            const fetchedGenres = await getGenres();
            setGenres(fetchedGenres);
            setLoading(false);
        };
        loadGenres();
    }, []);


    const visibleGenres = genres.slice(0, MAX_VISIBLE_GENRES);
    const dropdownGenres = genres.slice(MAX_VISIBLE_GENRES);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Basic loading state
    if (loading) {
         return (
            <nav className="bg-gray-100 border-b border-gray-300 shadow-sm h-[41px]">
                 <div className="container mx-auto px-4 py-2 text-sm text-gray-500">Loading genres...</div>
             </nav>
         );
    }

    return (
        <nav className="bg-gray-100 border-b border-gray-300 shadow-sm relative"> {/* Added relative positioning */}
            <div className="container mx-auto px-4">
                <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium py-2"> {/* Use flex-wrap */}
                    {visibleGenres.map((genre) => (
                        <li key={genre.id} className="flex-shrink-0">
                            <Link
                                href={`/the-loai/${genre.slug}`}
                                className="text-gray-700 hover:text-blue-600 whitespace-nowrap"
                                onClick={() => setIsDropdownOpen(false)} // Close dropdown on navigation
                            >
                                {genre.name}
                            </Link>
                        </li>
                    ))}

                    {/* Dropdown Toggle Button */}
                    {dropdownGenres.length > 0 && (
                        <li className="flex-shrink-0 relative">
                            <button
                                onClick={toggleDropdown}
                                className="text-blue-600 hover:text-blue-800 font-semibold focus:outline-none"
                                aria-haspopup="true"
                                aria-expanded={isDropdownOpen}
                            >
                                Thêm {isDropdownOpen ? '▲' : '▼'}
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-72 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-20">
                                    <ul className="p-2 grid grid-cols-2 gap-1">
                                        {dropdownGenres.map((genre) => (
                                            <li key={genre.id}>
                                                <Link
                                                    href={`/the-loai/${genre.slug}`}
                                                    className="block px-3 py-1 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded text-sm"
                                                    onClick={() => setIsDropdownOpen(false)} // Close on selection
                                                >
                                                    {genre.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default GenreNavBar; 