import React from 'react';
import Link from 'next/link';

// Mock data - Replace with actual categories
const mockCategories = [
  { id: 'general', name: 'General Discussion', description: 'Talk about anything related to stories.', slug: 'general-discussion' },
  { id: 'requests', name: 'Story Requests', description: 'Looking for a specific type of story? Ask here.', slug: 'story-requests' },
  { id: 'qna', name: 'Author Q&A', description: 'Questions and answers with authors.', slug: 'author-qna' },
  { id: 'feedback', name: 'Site Feedback', description: 'Suggestions and bug reports for Storiato.', slug: 'site-feedback' },
];

const ForumCategories = () => {
  return (
    <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Forum Categories</h2>
      <div className="space-y-3">
        {mockCategories.map(category => (
          <div key={category.id} className="p-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <Link href={`/community/${category.slug}`} className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline">
              {category.name}
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{category.description}</p>
            {/* TODO: Add stats like thread count/post count? */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumCategories; 