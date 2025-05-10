import React from 'react';
import Link from 'next/link';

// Mock data - Replace later
const mockRecommended = [
    { id: 'rec-1', title: 'Recommended Story Alpha', slug: 'rec-story-alpha' },
    { id: 'rec-2', title: 'Another Great Read Beta', slug: 'rec-story-beta' },
];
const mockTopAuthors = [
    { id: 'author-1', name: 'Author One', storyCount: 15 },
    { id: 'author-2', name: 'Writer Two', storyCount: 12 },
];

const ListingSidebar = () => {
  return (
    <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0 px-4 lg:px-0 space-y-6">
      {/* Recommended Stories Section */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-600">
          Recommended Stories
        </h3>
        <ul className="space-y-2 text-sm">
          {mockRecommended.map((story) => (
            <li key={story.id}>
              <Link href={`/truyen/${story.slug}`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                {story.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* TODO: Add actual recommendation logic */}
      </div>

      {/* Top Authors Section */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-600">
          Top Authors
        </h3>
        <ul className="space-y-2 text-sm">
          {mockTopAuthors.map((author) => (
            <li key={author.id} className="flex justify-between items-center">
              {/* TODO: Link to author page */}
              <span className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                  {author.name}
              </span>
               <span className="text-xs text-gray-400 dark:text-gray-500">{author.storyCount} stories</span>
            </li>
          ))}
        </ul>
         {/* TODO: Fetch actual top authors */}
      </div>
    </aside>
  );
};

export default ListingSidebar; 