import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NovelCardInfo } from '@/types'; // Import the simplified type

interface NovelCardProps {
  novel: NovelCardInfo;
}

const NovelCard: React.FC<NovelCardProps> = ({ novel }) => {
  return (
    <div className="novel-card border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out h-full flex flex-col">
      <Link href={`/truyen/${novel.slug}`} className="block group">
        <div className="relative aspect-[2/3] w-full"> {/* Aspect ratio for cover */}
          {novel.coverImageUrl ? (
            <Image
              src={novel.coverImageUrl}
              alt={`Cover for ${novel.title}`}
              fill // Use fill to cover the container
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" // Responsive image sizes
              className="object-cover group-hover:opacity-80 transition-opacity"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
              No Cover
            </div>
          )}
          {/* Optional: Overlay with latest chapter? */}
        </div>
      </Link>
      <div className="p-3 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg leading-tight mb-1 truncate group-hover:text-blue-600">
            <Link href={`/truyen/${novel.slug}`} className="hover:underline">
                {novel.title}
            </Link>
          </h3>
          <p className="text-sm text-gray-600 truncate mb-2">
            {novel.authorName}
          </p>
          {/* Optional: Display first genre or rating */}
           {novel.genres && novel.genres.length > 0 && (
             <p className="text-xs text-gray-500 truncate mb-2">
               {novel.genres[0].name}
             </p>
           )}
        </div>
        {novel.latestChapterNumber && (
          <p className="text-xs text-gray-500 mt-1">
            Chương {novel.latestChapterNumber}
          </p>
        )}
      </div>
    </div>
  );
};

export default NovelCard; 