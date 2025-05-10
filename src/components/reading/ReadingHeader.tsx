import React from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon, ListBulletIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

interface ReadingHeaderProps {
  novelTitle: string;
  novelSlug: string;
  chapterTitle?: string;
  chapterNumber: number;
  prevChapterSlug?: string | null;
  nextChapterSlug?: string | null;
}

const ReadingHeader: React.FC<ReadingHeaderProps> = (
    { novelTitle, novelSlug, chapterTitle, chapterNumber, prevChapterSlug, nextChapterSlug }
) => {
  const currentChapterDisplay = chapterTitle ? `Ch. ${chapterNumber}: ${chapterTitle}` : `Chapter ${chapterNumber}`;

  return (
    <nav className="sticky top-16 z-20 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 shadow-sm mb-4">
        {/* Adjusted sticky top value assuming main header height is h-16 */}
        <div className="container mx-auto px-2 sm:px-4 py-2 flex items-center justify-between text-sm">
            {/* Back/Novel Title */}
            <Link href={`/truyen/${novelSlug}`} className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline truncate flex-shrink min-w-0 mr-2">
                 <ListBulletIcon className="w-4 h-4 flex-shrink-0" />
                 <span className="truncate hidden sm:inline">{novelTitle}</span>
                 <span className="truncate sm:hidden">Index</span>
            </Link>

            {/* Chapter Navigation */}
            <div className="flex items-center justify-center flex-grow gap-1 sm:gap-2 mx-2 min-w-0">
                <Link href={prevChapterSlug ? `/truyen/${novelSlug}/doc/${prevChapterSlug}` : '#'}
                      className={`p-1.5 rounded ${prevChapterSlug ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700' : 'text-gray-400 dark:text-gray-600 cursor-not-allowed'}`}
                      aria-disabled={!prevChapterSlug}
                      tabIndex={!prevChapterSlug ? -1 : undefined}
                >
                    <ChevronLeftIcon className="w-5 h-5" />
                </Link>

                {/* Current Chapter Dropdown/Display (Placeholder) */}
                 <div className="text-center text-gray-800 dark:text-gray-200 font-medium truncate px-1" title={currentChapterDisplay}>
                    {currentChapterDisplay}
                 </div>
                 {/* TODO: Replace above div with a dropdown select for chapters */}

                <Link href={nextChapterSlug ? `/truyen/${novelSlug}/doc/${nextChapterSlug}` : '#'}
                      className={`p-1.5 rounded ${nextChapterSlug ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700' : 'text-gray-400 dark:text-gray-600 cursor-not-allowed'}`}
                      aria-disabled={!nextChapterSlug}
                      tabIndex={!nextChapterSlug ? -1 : undefined}
                >
                   <ChevronRightIcon className="w-5 h-5" />
                </Link>
            </div>

            {/* Settings (Placeholder) */}
             <button
                aria-label="Reading settings"
                className="p-1.5 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex-shrink-0 ml-2"
                onClick={() => alert('Reading settings placeholder!')}
            >
               <Cog6ToothIcon className="w-5 h-5" />
            </button>
        </div>
    </nav>
  );
};

export default ReadingHeader; 