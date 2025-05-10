import React from 'react';
import Link from 'next/link'; // Although not used in mock, keep for potential linking

// Mock data - Replace later
const mockActiveUsers = [
    { id: 'user1', username: 'ReaderFan123', avatarUrl: '/default-avatar.png' }, // Use default avatar
    { id: 'user2', username: 'Bookworm88', avatarUrl: '/default-avatar.png' },
    { id: 'user3', username: 'SpoilerSeeker', avatarUrl: '/default-avatar.png' },
];

const mockPopularThreads = [
    { id: 't2', title: 'Recommendations for strong female lead stories?', slug: 'recommend-strong-fl', replyCount: 32 },
    { id: 't1', title: 'Favorite moments in Kiếm Lai?', slug: 'favorite-kiem-lai-moments', replyCount: 15 },
];

const CommunitySidebar = () => {
  return (
    <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0 px-4 lg:px-0 space-y-6">
      {/* Active Users Section */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-600">
          Active Users
        </h3>
        {mockActiveUsers.length > 0 ? (
          <ul className="space-y-2 text-sm">
            {mockActiveUsers.slice(0, 5).map((user) => ( // Show top 5
              <li key={user.id} className="flex items-center gap-2">
                <img src={user.avatarUrl} alt={`${user.username}'s avatar`} className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600" />
                 {/* TODO: Link to user profile */}
                <span className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                  {user.username}
                </span>
              </li>
            ))}
          </ul>
        ) : (
           <p className="text-sm text-gray-500 dark:text-gray-400">No active users found.</p>
        )}
         {/* TODO: Fetch actual active users */}
      </div>

      {/* Popular Threads Section */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-600">
          Popular Threads
        </h3>
        {mockPopularThreads.length > 0 ? (
          <ul className="space-y-2 text-sm">
            {mockPopularThreads.slice(0, 5).map((thread) => ( // Show top 5
              <li key={thread.id}>
                <Link href={`/community/thread/${thread.slug}`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  {thread.title}
                </Link>
                <span className="block text-xs text-gray-500 dark:text-gray-400">({thread.replyCount} replies)</span>
              </li>
            ))}
          </ul>
         ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">No popular threads found.</p>
         )}
         {/* TODO: Fetch actual popular threads */}
      </div>
    </aside>
  );
};

export default CommunitySidebar; 