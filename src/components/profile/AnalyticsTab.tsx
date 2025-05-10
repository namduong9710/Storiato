import React from 'react';

const AnalyticsTab = () => {
  // TODO: Fetch actual analytics data

  // Mock Data
  const stats = {
    genresRead: ['Tiên Hiệp', 'Ngôn Tình', 'Đô Thị'],
    totalChaptersRead: 1582,
    commentsPosted: 45,
    storiesFavorited: 12,
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Reading Analytics</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Stat Card Example */}
        <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Chapters Read</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stats.totalChaptersRead.toLocaleString()}</p>
        </div>

        {/* Stat Card Example */}
        <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Stories Favorited</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stats.storiesFavorited}</p>
        </div>

        {/* Stat Card Example */}
        <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Comments Posted</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stats.commentsPosted}</p>
        </div>

         {/* Stat Card Example - List */}
         <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Top Genres Read</p>
           <div className="flex flex-wrap gap-1 mt-2">
             {stats.genresRead.map(genre => (
                <span key={genre} className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium">
                  {genre}
                </span>
             ))}
           </div>
        </div>
      </div>

      {/* TODO: Add more detailed stats or charts later */}
    </div>
  );
};

export default AnalyticsTab; 