import React from 'react';
import Link from 'next/link';
import { ChapterInfo } from '@/types';
import PaginationControls from '@/components/common/PaginationControls';

interface ChapterListProps {
  chapters: ChapterInfo[];
  novelSlug: string;
  totalChapters: number;
  // TODO: Add pagination state (currentPage, itemsPerPage)
}

const ChapterList: React.FC<ChapterListProps> = ({ chapters, novelSlug, totalChapters }) => {
  // Placeholder pagination - replace with actual state and logic
  const currentPage = 1;
  const itemsPerPage = 50; // Example: Show 50 chapters per page
  const totalPages = Math.ceil(totalChapters / itemsPerPage);

  // TODO: Slice chapters based on currentPage and itemsPerPage
  const displayedChapters = chapters.slice(0, itemsPerPage); // Simple slice for now

  return (
    <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Chapters ({totalChapters})</h2>
       {/* TODO: Add sort/filter options for chapters? */}

      {/* Chapter Table - Consider responsive design */}
      <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-4 py-2 text-left font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  #
                </th>
                <th scope="col" className="px-4 py-2 text-left font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-4 py-2 text-left font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-4 py-2 text-right font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {displayedChapters.length > 0 ? (
                displayedChapters.map((chapter) => (
                  <tr key={chapter.id}>
                    <td className="px-4 py-2 whitespace-nowrap text-gray-500 dark:text-gray-400">
                      {chapter.chapterNumber}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-gray-900 dark:text-gray-100">
                      {chapter.title || `Chapter ${chapter.chapterNumber}`}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-gray-500 dark:text-gray-400">
                      {chapter.publishDate ? new Date(chapter.publishDate).toLocaleDateString() : '-'}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-right">
                       {/* Link to the actual reading page */}
                      <Link href={`/truyen/${novelSlug}/doc/${chapter.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                        Read
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-4 py-4 text-center text-gray-500 dark:text-gray-400">
                    No chapters available yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
      </div>

    </div>
  );
};
/* 
       { Pagination for Chapters}

        //TODO:
      { {totalPages > 1 && (
         <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => console.log('Chapter list page change:', page)} // Placeholder
          />
      )} }       */
export default ChapterList; 