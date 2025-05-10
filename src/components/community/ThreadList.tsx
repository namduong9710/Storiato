import React from 'react';
import Link from 'next/link';

// Mock thread type
interface Thread {
  id: string;
  title: string;
  slug: string;
  creator: string;
  replyCount: number;
  lastActivity: string; // Timestamp or relative time
  isPinned?: boolean;
}

// Mock data
const mockThreads: Thread[] = [
  { id: 't1', title: 'Favorite moments in Kiếm Lai?', slug: 'favorite-kiem-lai-moments', creator: 'ReaderFan123', replyCount: 15, lastActivity: '1 hour ago', isPinned: true },
  { id: 't2', title: 'Recommendations for strong female lead stories?', slug: 'recommend-strong-fl', creator: 'Bookworm88', replyCount: 32, lastActivity: '5 hours ago' },
  { id: 't3', title: "Discussion about the ending of 'Một Tờ Hôn Thư'", slug: 'mot-to-hon-thu-ending', creator: 'SpoilerSeeker', replyCount: 8, lastActivity: '2 days ago' },
  // Add more...
];

const ThreadList = () => {
  // TODO: Fetch actual threads for the current category/view
  const pinnedThreads = mockThreads.filter(t => t.isPinned);
  const regularThreads = mockThreads.filter(t => !t.isPinned);

  const renderThreadRow = (thread: Thread) => (
    <tr key={thread.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
      <td className="px-4 py-3 whitespace-nowrap">
        <Link href={`/community/thread/${thread.slug}`} className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
          {thread.isPinned && <span className="text-yellow-500 mr-1">📌</span>}
          {thread.title}
        </Link>
        <span className="block text-xs text-gray-500 dark:text-gray-400">by {thread.creator}</span>
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-center text-gray-600 dark:text-gray-400">{thread.replyCount}</td>
      <td className="px-4 py-3 whitespace-nowrap text-right text-gray-500 dark:text-gray-400">{thread.lastActivity}</td>
    </tr>
  );

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
         <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Threads</h2>
         {/* TODO: Link to create new thread page/modal (check login) */}
         <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium">
           Create New Thread
         </button>
      </div>

      {/* Thread Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-4 py-2 text-left font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Topic / Author
                </th>
                <th scope="col" className="px-4 py-2 text-center font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Replies
                </th>
                <th scope="col" className="px-4 py-2 text-right font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Last Activity
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {pinnedThreads.map(renderThreadRow)}
              {pinnedThreads.length > 0 && regularThreads.length > 0 && (
                  <tr className="bg-gray-100 dark:bg-gray-700"><td colSpan={3} className="py-1"></td></tr> // Separator
              )}
              {regularThreads.map(renderThreadRow)}
              {mockThreads.length === 0 && (
                 <tr>
                   <td colSpan={3} className="px-4 py-4 text-center text-gray-500 dark:text-gray-400">
                    No threads found in this category yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
      </div>
       {/* TODO: Add pagination for threads */}
    </div>
  );
};

export default ThreadList; 