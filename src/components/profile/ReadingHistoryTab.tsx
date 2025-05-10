import React from 'react';
import Link from 'next/link';

// Mock type - replace with actual type
interface ReadingHistoryEntry {
  id: string;
  novelTitle: string;
  novelSlug: string;
  chapterNumber: number;
  chapterSlug: string;
  readTimestamp: string; // Or Date object
}

// Mock data - Replace with actual fetch
const mockHistory: ReadingHistoryEntry[] = [
  {
    id: 'hist1', novelTitle: 'Kiếm Lai', novelSlug: 'kiem-lai',
    chapterNumber: 520, chapterSlug: 'chuong-520', readTimestamp: '2024-07-26T14:30:00Z'
  },
  {
    id: 'hist2', novelTitle: 'Một Tờ Hôn Thư', novelSlug: 'mot-to-hon-thu',
    chapterNumber: 88, chapterSlug: 'chuong-88', readTimestamp: '2024-07-25T09:15:00Z'
  },
  {
    id: 'hist3', novelTitle: 'Vô Thượng Thần Đế', novelSlug: 'vo-thuong-than-de',
    chapterNumber: 1001, chapterSlug: 'chuong-1001', readTimestamp: '2024-07-24T21:00:00Z'
  },
  // Add more mock history items
];

const ReadingHistoryTab = () => {
  // TODO: Fetch actual reading history
  const history = mockHistory;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Reading History</h3>
      {history.length > 0 ? (
        <ul className="space-y-3">
          {history.map((entry) => (
            <li key={entry.id} className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <Link href={`/truyen/${entry.novelSlug}`} className="font-medium text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 text-md">
                  {entry.novelTitle}
                </Link>
                <span className="text-sm text-gray-600 dark:text-gray-400 block sm:inline sm:ml-2">
                  - Chapter {entry.chapterNumber}
                </span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap mt-1 sm:mt-0">
                Read on: {new Date(entry.readTimestamp).toLocaleString()}
                <Link href={`/truyen/${entry.novelSlug}/doc/${entry.chapterSlug}`} className="ml-3 text-blue-600 dark:text-blue-400 hover:underline">
                  Continue
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">Your reading history is empty.</p>
      )}
      {/* TODO: Add pagination */}
    </div>
  );
};

export default ReadingHistoryTab; 