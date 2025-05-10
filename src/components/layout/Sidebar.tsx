'use client'; // This component needs state for tabs

import React, { useState } from 'react'; // Import useState
import Link from 'next/link';

// Define a type for trending story data
interface TrendingStory {
    id: string;
    title: string;
    slug: string;
    views: number;
}

// --- Mock Data (Replace with actual data fetching later) ---
const mockTrendingDay: TrendingStory[] = [
    { id: 'day-70-nguoi-dep', title: 'Thập Niên 70: Người Đẹp...', slug: '70-nguoi-dep', views: 1523 },
    { id: 'day-kiem-lai', title: 'Kiếm Lai', slug: 'kiem-lai', views: 1480 },
    { id: 'day-vo-thuong', title: 'Vô Thượng Thần Đế', slug: 'vo-thuong-than-de', views: 1105 },
    { id: 'day-me-ke', title: 'Mẹ Kế Ở Cổ Đại Làm Cá Mặn', slug: 'me-ke-ca-man', views: 950 },
    // Add more...
];

const mockTrendingMonth: TrendingStory[] = [
    { id: 'month-kiem-lai', title: 'Kiếm Lai', slug: 'kiem-lai', views: 45070 },
    { id: 'month-vo-thuong', title: 'Vô Thượng Thần Đế', slug: 'vo-thuong-than-de', views: 38500 },
    { id: 'month-70-nguoi-dep', title: 'Thập Niên 70: Người Đẹp...', slug: '70-nguoi-dep', views: 31200 },
    { id: 'month-than-y', title: 'Lưu Đày Thần Y Mang Theo...', slug: 'than-y-chay-nan', views: 25600 },
    // Add more...
];

const mockTrendingAllTime: TrendingStory[] = [
    { id: 'all-kiem-lai', title: 'Kiếm Lai', slug: 'kiem-lai', views: 1502340 },
    { id: 'all-vo-thuong', title: 'Vô Thượng Thần Đế', slug: 'vo-thuong-than-de', views: 1205000 },
    { id: 'all-dau-la', title: 'Đấu La Đại Lục (Example)', slug: 'dau-la-dai-luc', views: 980500 },
    { id: 'all-pham-nhan', title: 'Phàm Nhân Tu Tiên (Example)', slug: 'pham-nhan-tu-tien', views: 850000 },
    // Add more...
];
// -----------------------------------------------------------

type TimePeriod = 'day' | 'month' | 'all';

const Sidebar = () => {
  const [activePeriod, setActivePeriod] = useState<TimePeriod>('day'); // Default to 'day'

  // Function to get the correct data based on the active period
  const getTrendingData = (): TrendingStory[] => {
    switch (activePeriod) {
      case 'month':
        return mockTrendingMonth;
      case 'all':
        return mockTrendingAllTime;
      case 'day':
      default:
        return mockTrendingDay;
    }
  };

  const trendingData = getTrendingData();

  const renderStoryList = (stories: TrendingStory[]) => (
     <ul className="space-y-2 text-sm mt-3">
        {stories.slice(0, 7).map((story, index) => ( // Show top 7
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
    <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0 px-4 lg:px-0">
        {/* Trending Stories Section */}
        <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
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
            {renderStoryList(trendingData)}

             {/* TODO: Add "See More" link if needed */}
        </div>

        {/* Recent Activity Section - Placeholder */}
         <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-600">
                Recent Activity
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
                (Activity feed coming soon...)
            </p>
        </div>

         {/* TODO: Add other sidebar elements */}

    </aside>
  );
};

export default Sidebar; 