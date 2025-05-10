import React from 'react';

// Mock data - Replace later
const mockFollowedAuthors = [
    { id: 'author-1', name: 'Phong Hỏa Hí Chư Hầu' },
    { id: 'author-2', name: 'Lục Dược' },
    { id: 'author-3', name: 'Ốc Sên Ký Sinh' },
];

const mockCommunityActivity = [
    { id: 'act-1', type: 'comment', text: 'Commented on Chapter 1201 of Kiếm Lai', timestamp: '2 hours ago' },
    { id: 'act-2', type: 'favorite', text: "Favorited 'Một Tờ Hôn Thư'", timestamp: '1 day ago' },
];

const ProfileSidebar = () => {
  return (
    <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0 px-4 lg:px-0 space-y-6">
      {/* Followed Authors Section */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-600">
          Followed Authors
        </h3>
        {mockFollowedAuthors.length > 0 ? (
          <ul className="space-y-2 text-sm">
            {mockFollowedAuthors.map((author) => (
              <li key={author.id}>
                {/* TODO: Link to author page */}
                <span className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                  {author.name}
                </span>
              </li>
            ))}
          </ul>
        ) : (
           <p className="text-sm text-gray-500 dark:text-gray-400">You are not following any authors yet.</p>
        )}
        {/* TODO: Add actual followed authors list */}
      </div>

      {/* Community Activity Section */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-600">
          Community Activity
        </h3>
        {mockCommunityActivity.length > 0 ? (
          <ul className="space-y-3 text-sm">
            {mockCommunityActivity.map((activity) => (
              <li key={activity.id} className="text-gray-700 dark:text-gray-300">
                <span className="block">{activity.text}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{activity.timestamp}</span>
              </li>
            ))}
          </ul>
        ) : (
           <p className="text-sm text-gray-500 dark:text-gray-400">No recent community activity.</p>
        )}
        {/* TODO: Add actual activity feed */}
      </div>
    </aside>
  );
};

export default ProfileSidebar; 