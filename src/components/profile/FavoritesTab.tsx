import React from 'react';
import NovelCard from '@/components/novel/NovelCard';
import { NovelCardInfo } from '@/types';

// Mock data - Replace with actual user favorites fetch
const mockFavoriteNovels: NovelCardInfo[] = [
  {
    id: 'fav-kiem-lai',
    title: 'Kiếm Lai',
    slug: 'kiem-lai',
    authorName: 'Phong Hỏa Hí Chư Hầu',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 1201,
    genres: [{ id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' }],
  },
  {
    id: 'fav-mot-to-hon-thu',
    title: 'Một Tờ Hôn Thư',
    slug: 'mot-to-hon-thu',
    authorName: 'Lục Dược',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 157,
    genres: [{ id: 'ngon-tinh', name: 'Ngôn Tình', slug: 'ngon-tinh' }, { id: 'completed', name: 'Completed', slug: 'completed' }],
  },
  // Add more mock favorites
];

const FavoritesTab = () => {
  // TODO: Fetch actual favorite novels data
  const novels = mockFavoriteNovels;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Favorite Stories</h3>
      {novels.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {novels.map((novel) => (
            <NovelCard key={novel.id} novel={novel} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">You haven't added any stories to your favorites yet.</p>
      )}
       {/* TODO: Add pagination if the list can be long */}
    </div>
  );
};

export default FavoritesTab; 