'use client'; // Needed for state to handle collapse/expand

import React, { useState } from 'react';

interface SynopsisSectionProps {
  synopsis: string;
}

const SynopsisSection: React.FC<SynopsisSectionProps> = ({ synopsis }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewLength = 250; // Characters to show before collapsing

  const needsTruncation = synopsis.length > previewLength;
  const displaySynopsis = needsTruncation && !isExpanded
    ? `${synopsis.substring(0, previewLength)}...`
    : synopsis;

  return (
    <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Synopsis</h2>
      {/* Use prose for better typography */}
      <div className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
        <p>{displaySynopsis}</p>
      </div>
      {needsTruncation && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm mt-2"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default SynopsisSection; 