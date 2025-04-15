import React from 'react';
import NovelCard from '@/components/novel/NovelCard';
import { NovelCardInfo } from '@/types';

// --- Mock Data for Home Page ---
const mockHotNovels: NovelCardInfo[] = [
  {
    id: 'kiem-lai',
    title: 'Kiếm Lai',
    slug: 'kiem-lai',
    authorName: 'Phong Hỏa Hí Chư Hầu',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 1200,
    genres: [{ id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' }], // Example genre
  },
  {
    id: 'than-y-chay-nan',
    title: 'Lưu Đày Thần Y Mang Theo Không Gian Chạy Nạn',
    slug: 'than-y-chay-nan',
    authorName: 'Tác Giả B',
    coverImageUrl: '/placeholder-cover.jpg', // Use placeholder
    latestChapterNumber: 350,
    genres: [{ id: 'xuyen-khong', name: 'Xuyên Không', slug: 'xuyen-khong' }],
  },
  {
    id: '70-lam-giau',
    title: 'Thập Niên 70: Sống Lại Làm Giàu',
    slug: '70-lam-giau',
    authorName: 'Tác Giả C',
    // No cover image example
    latestChapterNumber: 500,
    genres: [{ id: 'dien-van', name: 'Điền Văn', slug: 'dien-van' }],
  },
  {
    id: 'vo-thuong-than-de',
    title: 'Vô Thượng Thần Đế',
    slug: 'vo-thuong-than-de',
    authorName: 'Ốc Sên Ký Sinh',
    coverImageUrl: '/placeholder-cover.jpg', // Use placeholder
    latestChapterNumber: 1220,
    genres: [{ id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' }],
  },
   {
    id: 'me-ke-ca-man',
    title: 'Mẹ Kế Ở Cổ Đại Làm Cá Mặn',
    slug: 'me-ke-ca-man',
    authorName: 'Tác Giả D',
    coverImageUrl: '/placeholder-cover.jpg', // Use placeholder
    latestChapterNumber: 215,
    genres: [{ id: 'co-dai', name: 'Cổ Đại', slug: 'co-dai' }],
  },
  // Add more mock novels as needed
];

// --- Page Component ---

// Placeholder function to get hot novels (will be replaced by API call later)
async function getHotNovelData(): Promise<NovelCardInfo[]> {
  console.log('Fetching mock hot novel data');
  // TODO: Replace with actual API call using src/lib/api.ts getHotNovels()
  return mockHotNovels;
}

export default async function Home() {
  const hotNovels = await getHotNovelData(); // Fetch mock data

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 border-b pb-2">Truyện Hot</h1>
      {hotNovels.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {hotNovels.map((novel) => (
            <NovelCard key={novel.id} novel={novel} />
          ))}
        </div>
      ) : (
        <p>Không tìm thấy truyện hot nào.</p>
      )}

      {/* TODO: Add sections for "New Updates", Genres, etc. */}
    </div>
  );
} 