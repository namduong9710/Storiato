import React from 'react';
import NovelCard from '@/components/novel/NovelCard';
import { NovelCardInfo } from '@/types';
import HeroCarousel from '@/components/home/HeroCarousel';
import Sidebar from '@/components/layout/Sidebar';
import Link from 'next/link';

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

// Add mock data for New Updates
const mockNewUpdates: NovelCardInfo[] = [
   {
    id: '70-nguoi-dep',
    title: 'Thập Niên 70: Người Đẹp Sợ Giao Tiếp Gả Cho Ác Bá',
    slug: '70-nguoi-dep',
    authorName: 'Tác Giả E',
    coverImageUrl: '/placeholder-cover.jpg', // Use placeholder
    latestChapterNumber: 350,
    genres: [{ id: 'ngon-tinh', name: 'Ngôn Tình', slug: 'ngon-tinh' }],
  },
  {
    id: 'vo-thuong-than-de', // Can appear in multiple lists
    title: 'Vô Thượng Thần Đế',
    slug: 'vo-thuong-than-de',
    authorName: 'Ốc Sên Ký Sinh',
    coverImageUrl: '/placeholder-cover.jpg', // Use placeholder
    latestChapterNumber: 1220, // Maybe updated chapter number?
    genres: [{ id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' }],
  },
   {
    id: 'kiem-lai', // Can appear in multiple lists
    title: 'Kiếm Lai',
    slug: 'kiem-lai',
    authorName: 'Phong Hỏa Hí Chư Hầu',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 1201, // Updated chapter
    genres: [{ id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' }],
  },
  {
    id: '70-hanh-phuc',
    title: 'Thập Niên 70, Những Năm Tháng Hạnh Phúc',
    slug: '70-hanh-phuc',
    authorName: 'Tác Giả F',
    // No cover
    latestChapterNumber: 616,
    genres: [{ id: 'ngon-tinh', name: 'Ngôn Tình', slug: 'ngon-tinh' }],
  },
  // Add more mock updated novels...
];

// Add mock data for Completed Novels
const mockCompletedNovels: NovelCardInfo[] = [
  {
    id: 'mot-to-hon-thu',
    title: 'Một Tờ Hôn Thư',
    slug: 'mot-to-hon-thu',
    authorName: 'Lục Dược',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 157, // Use total chapters for completed
    genres: [{ id: 'ngon-tinh', name: 'Ngôn Tình', slug: 'ngon-tinh' }],
  },
  {
    id: '70-ban-than-nu-chinh',
    title: 'Thập Niên 70: Xuyên Thành Bạn Thân Nữ Chính',
    slug: '70-ban-than-nu-chinh',
    authorName: 'Tác Giả G',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 333,
    genres: [{ id: 'xuyen-khong', name: 'Xuyên Không', slug: 'xuyen-khong' }, { id: 'dien-van', name: 'Điền Văn', slug: 'dien-van' }],
  },
   {
    id: 'quy-doan-menh',
    title: 'Quỷ Đoản Mệnh Nhà Họ Tạ Sống Lâu Trăm Tuổi Rồi',
    slug: 'quy-doan-menh',
    authorName: 'Tác Giả H',
    // No cover
    latestChapterNumber: 957,
     genres: [{ id: 'huyen-huyen', name: 'Huyền Huyễn', slug: 'huyen-huyen' }],
  },
  {
    id: 'cong-khai',
    title: 'Công Khai',
    slug: 'cong-khai',
    authorName: 'Tác Giả I',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 88,
     genres: [{ id: 'do-thi', name: 'Đô Thị', slug: 'do-thi' }],
  },
  // Add more mock completed novels...
];

// Add mock data for specific authors
const mockThuVienNovels: NovelCardInfo[] = [
  {
    id: 'thu-vien-novel-1',
    title: 'Câu Chuyện Của Thư Viễn 1',
    slug: 'thu-vien-novel-1',
    authorName: 'Thư Viễn',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 120,
    genres: [{ id: 'ngon-tinh', name: 'Ngôn Tình', slug: 'ngon-tinh' }],
  },
   {
    id: 'thu-vien-novel-2',
    title: 'Hành Trình Của Thư Viễn',
    slug: 'thu-vien-novel-2',
    authorName: 'Thư Viễn',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 95,
    genres: [{ id: 'do-thi', name: 'Đô Thị', slug: 'do-thi' }],
  },
  // Add more...
];

const mockMiraNovels: NovelCardInfo[] = [
 {
    id: 'mira-novel-1',
    title: 'Giấc Mơ Của Mira',
    slug: 'mira-novel-1',
    authorName: 'Mira',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 210,
    genres: [{ id: 'huyen-huyen', name: 'Huyền Huyễn', slug: 'huyen-huyen' }],
  },
  // Add more...
];

// --- Placeholder Data Fetching Functions ---

// Placeholder function to get hot novels (will be replaced by API call later)
async function getHotNovelData(): Promise<NovelCardInfo[]> {
  console.log('Fetching mock hot novel data');
  // TODO: Replace with actual API call using src/lib/api.ts getHotNovels()
  return mockHotNovels;
}

// Add function for new updates
async function getNewUpdateData(): Promise<NovelCardInfo[]> {
  console.log('Fetching mock new update data');
  // TODO: Replace with actual API call: GET /api/novels/latest-updates
  return mockNewUpdates;
}

// Add function for completed novels
async function getCompletedNovelData(): Promise<NovelCardInfo[]> {
  console.log('Fetching mock completed novel data');
  // TODO: Replace with actual API call: GET /api/novels?status=completed
  return mockCompletedNovels;
}

// Add functions for specific authors
async function getThuVienNovelData(): Promise<NovelCardInfo[]> {
  console.log('Fetching mock Thu Vien novel data');
  // TODO: Replace with actual API call: GET /api/novels?author=thu-vien
  return mockThuVienNovels;
}
async function getMiraNovelData(): Promise<NovelCardInfo[]> {
  console.log('Fetching mock Mira novel data');
  // TODO: Replace with actual API call: GET /api/novels?author=mira
  return mockMiraNovels;
}

// --- Page Component ---
export default async function Home() {
  // Fetch all sets of data
  const hotNovels = await getHotNovelData();
  const newUpdates = await getNewUpdateData();
  const completedNovels = await getCompletedNovelData();
  const thuVienNovels = await getThuVienNovelData(); // Fetch author data
  const miraNovels = await getMiraNovelData();     // Fetch author data

  return (
    <div>
      <HeroCarousel />

      {/* Main content area with Sidebar */}
      <div className="container mx-auto px-4 mt-8 flex flex-col lg:flex-row gap-8">

        {/* Main Content Sections */}
        <div className="flex-grow space-y-8">
          {/* Featured Stories Section (adjust grid) */}
          <section>
             <h1 className="text-2xl font-semibold mb-4 border-b pb-2 dark:text-white dark:border-gray-600">Truyện Hot</h1>
              {/* Grid: 1 col mobile, 3 cols desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {hotNovels.slice(0, 6).map((novel) => ( // Limit to 6 for example
                  <NovelCard key={`hot-${novel.id}`} novel={novel} />
                ))}
              </div>
             {/* TODO: Add 'See More' link */}
          </section>

           {/* New Releases Section (Horizontal Scroll) */}
          <section>
             <h1 className="text-2xl font-semibold mb-4 border-b pb-2 dark:text-white dark:border-gray-600">Mới Cập Nhật</h1>
              {/* Horizontal scroll container */}
              <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                  {newUpdates.map((novel) => (
                     // Fixed width for horizontal items
                     <div key={`update-${novel.id}`} className="w-40 sm:w-44 flex-shrink-0">
                         <NovelCard novel={novel} />
                     </div>
                  ))}
              </div>
          </section>

          {/* Popular Genres Section (adjust grid) */}
           <section>
             <h1 className="text-2xl font-semibold mb-4 border-b pb-2 dark:text-white dark:border-gray-600">Thể Loại Phổ Biến</h1>
              {/* Grid: 2 cols mobile, 4 cols desktop */}
               {/* TODO: Replace with actual genre component/data */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                 {['Tiên Hiệp', 'Ngôn Tình', 'Đam Mỹ', 'Xuyên Không', 'Đô Thị', 'Huyền Huyễn', 'Lịch Sử', 'Trọng Sinh'].map(genreName => (
                     <Link key={genreName} href={`/the-loai/${genreName.toLowerCase().replace(/\s+/g, '-')}`} // Example slug generation
                         className="block p-3 text-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white text-sm font-medium">
                         {genreName}
                     </Link>
                 ))}
             </div>
          </section>

           {/* Completed Novels Section (use standard grid) */}
           <section>
             <h1 className="text-2xl font-semibold mb-4 border-b pb-2 dark:text-white dark:border-gray-600">Truyện Full</h1>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {completedNovels.slice(0, 6).map((novel) => ( // Limit to 6
                  <NovelCard key={`completed-${novel.id}`} novel={novel} />
                ))}
              </div>
              {/* TODO: Add 'See More' link */}
          </section>

          {/* Author Sections (use standard grid) */}
           <section>
             <h1 className="text-2xl font-semibold mb-4 border-b pb-2 dark:text-white dark:border-gray-600">Truyện của Thư Viễn</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {thuVienNovels.slice(0, 3).map((novel) => ( // Limit to 3
                  <NovelCard key={`thu-vien-${novel.id}`} novel={novel} />
                ))}
              </div>
               {/* TODO: Add 'See More' link */}
          </section>
           <section>
             <h1 className="text-2xl font-semibold mb-4 border-b pb-2 dark:text-white dark:border-gray-600">Truyện của Mira</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {miraNovels.slice(0, 3).map((novel) => ( // Limit to 3
                  <NovelCard key={`mira-${novel.id}`} novel={novel} />
                ))}
              </div>
               {/* TODO: Add 'See More' link */}
          </section>

        </div>

        {/* Sidebar (Hidden on mobile, shown on lg+) */}
        <div className="hidden lg:block w-full lg:w-auto">
          <Sidebar />
        </div>

      </div>
    </div>
  );
} 