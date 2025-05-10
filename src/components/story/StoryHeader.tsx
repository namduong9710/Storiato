import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Novel } from '@/types'; // Assuming full Novel type is defined

interface StoryHeaderProps {
  story: Novel;
}

const StoryHeader: React.FC<StoryHeaderProps> = ({ story }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      {/* Cover Image */}
      <div className="flex-shrink-0 w-32 h-48 md:w-40 md:h-60 mx-auto md:mx-0 relative overflow-hidden rounded">
        <Image
          src={story.coverImageUrl || '/placeholder-cover.jpg'}
          alt={`Cover for ${story.title}`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 128px, 160px"
        />
      </div>

      {/* Story Details */}
      <div className="flex-grow text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">{story.title}</h1>
        {/* TODO: Link to author page */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          Author: <span className="font-medium text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">{story.author.name}</span>
        </p>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Status: <span className="font-medium">{story.status}</span> | Chapters: <span className="font-medium">{story.totalChapters}</span>
        </div>
        {/* TODO: Implement actual rating display */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Rating: {story.rating ? `${story.rating}/5` : 'N/A'} (Placeholder)</p>

        {/* Genre Tags */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
          {story.genres.map((genre) => (
            <Link key={genre.id} href={`/the-loai/${genre.slug}`} className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs hover:bg-gray-300 dark:hover:bg-gray-600">
              {genre.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
           {/* TODO: Link to first chapter or reading progress */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium">
            Start Reading
          </button>
           {/* TODO: Implement Add to Favorites functionality */}
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-500 text-sm font-medium">
            Add to Favorites
          </button>
           {/* TODO: Implement Share functionality */}
           <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-500 text-sm font-medium">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryHeader; 