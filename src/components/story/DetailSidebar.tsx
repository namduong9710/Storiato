'use client'; // Make client component for state

import React, { useState } from 'react'; // Import useState
import Link from 'next/link';
import { Novel, Author } from '@/types'; // Assuming these types are defined

// --- Mock Data for Most Read (Same as Sidebar) ---
interface TrendingStory {
    id: string;
    title: string;
    slug: string;
    views: number;
}

const mockTrendingDay: TrendingStory[] = [
    { id: 'day-70-nguoi-dep', title: 'Thập Niên 70: Người Đẹp...', slug: '70-nguoi-dep', views: 1523 },
    { id: 'day-kiem-lai', title: 'Kiếm Lai', slug: 'kiem-lai', views: 1480 },
    { id: 'day-vo-thuong', title: 'Vô Thượng Thần Đế', slug: 'vo-thuong-than-de', views: 1105 },
    { id: 'day-me-ke', title: 'Mẹ Kế Ở Cổ Đại Làm Cá Mặn', slug: 'me-ke-ca-man', views: 950 },
];
const mockTrendingMonth: TrendingStory[] = [
    { id: 'month-kiem-lai', title: 'Kiếm Lai', slug: 'kiem-lai', views: 45070 },
    { id: 'month-vo-thuong', title: 'Vô Thượng Thần Đế', slug: 'vo-thuong-than-de', views: 38500 },
    { id: 'month-70-nguoi-dep', title: 'Thập Niên 70: Người Đẹp...', slug: '70-nguoi-dep', views: 31200 },
    { id: 'month-than-y', title: 'Lưu Đày Thần Y Mang Theo...', slug: 'than-y-chay-nan', views: 25600 },
];
const mockTrendingAllTime: TrendingStory[] = [
    { id: 'all-kiem-lai', title: 'Kiếm Lai', slug: 'kiem-lai', views: 1502340 },
    { id: 'all-vo-thuong', title: 'Vô Thượng Thần Đế', slug: 'vo-thuong-than-de', views: 1205000 },
    { id: 'all-dau-la', title: 'Đấu La Đại Lục (Example)', slug: 'dau-la-dai-luc', views: 980500 },
    { id: 'all-pham-nhan', title: 'Phàm Nhân Tu Tiên (Example)', slug: 'pham-nhan-tu-tien', views: 850000 },
];
type TimePeriod = 'day' | 'month' | 'all';
// -----------------------------------------------------

// Mock data - Replace later
const mockSimilarStories: Pick<Novel, 'id' | 'title' | 'slug'>[] = [
    { id: 'sim-1', title: 'Similar Story One', slug: 'similar-story-one' },
    { id: 'sim-2', title: 'Another Tale Like This', slug: 'another-tale-like-this' },
    { id: 'sim-3', title: 'Echoes of the Protagonist', slug: 'echoes-protagonist' },
];

interface DetailSidebarProps {
  author: Author; // Pass the author details
  // similarStories: Pick<Novel, 'id' | 'title' | 'slug'>[]; // Pass similar stories data
}

const DetailSidebar: React.FC<DetailSidebarProps> = ({ author /*, similarStories */ }) => {
  const [activePeriod, setActivePeriod] = useState<TimePeriod>('day'); // State for Most Read tabs
  const similarStories = mockSimilarStories; // Using mock for Similar Stories

  const getTrendingData = (): TrendingStory[] => {
    switch (activePeriod) {
      case 'month': return mockTrendingMonth;
      case 'all': return mockTrendingAllTime;
      case 'day': default: return mockTrendingDay;
    }
  };
  const trendingData = getTrendingData();

  const renderTrendingStoryList = (stories: TrendingStory[]) => (
     <ul className="space-y-2 text-sm mt-3">
        {stories.slice(0, 5).map((story, index) => ( // Show top 5 trending
            <li key={story.id} className="flex items-center">
                <span className={`mr-2 font-bold w-5 text-center ${index < 3 ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>{index + 1}</span>
                <Link href={`/truyen/${story.slug}`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 truncate flex-1" title={story.title}>
                  {story.title}
                </Link>
                <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">{story.views.toLocaleString()}</span>
            </li>
        ))}
        {stories.length === 0 && (
             <p className="text-xs text-gray-500 dark:text-gray-400 text-center py-2">No trending stories for this period.</p>
        )}
    </ul>
  );

  return (
    <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0 px-4 lg:px-0 space-y-6">
      {/* --- Most Read Section (New) --- */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2 mb-1">
                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                     Most Read
                 </h3>
                 {/* Time Period Tabs */}
                 <div className="flex space-x-1 border border-gray-300 dark:border-gray-600 rounded text-xs">
                    <button
                         onClick={() => setActivePeriod('day')}
                         className={`px-2 py-0.5 rounded-l ${activePeriod === 'day' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                         Day
                     </button>
                     <button
                        onClick={() => setActivePeriod('month')}
                        className={`px-2 py-0.5 border-l border-r border-gray-300 dark:border-gray-600 ${activePeriod === 'month' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                         Month
                     </button>
                     <button
                         onClick={() => setActivePeriod('all')}
                         className={`px-2 py-0.5 rounded-r ${activePeriod === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                         All
                    </button>
                 </div>
            </div>
            {/* Render the list based on active period */}
            {renderTrendingStoryList(trendingData)}
      </div>
      {/* --- End Most Read Section --- */}

      {/* Similar Stories Section */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-600">
          Similar Stories
        </h3>
        <ul className="space-y-2 text-sm">
          {similarStories.slice(0, 5).map((story) => (
            <li key={story.id}>
              <Link href={`/truyen/${story.slug}`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                {story.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* TODO: Add actual similar stories logic/fetching */}
      </div>

      {/* Author Info Section */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-600">
          About the Author
        </h3>
         {/* TODO: Link to author's page */}
        <p className="text-md font-medium text-gray-800 dark:text-gray-200 mb-2 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
            {author.name}
        </p>
        {/* Placeholder for author bio - fetch this later */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          (Author bio coming soon... Lorem ipsum dolor sit amet consectetur adipisicing elit.)
        </p>
        {/* TODO: Link to see all author's works */}
        <Link href={`/tac-gia/${author.id}`} /* Use author slug if available */
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
            See all works by this author
        </Link>
      </div>
    </aside>
  );
};

export default DetailSidebar; 