import React from 'react';
import NovelCard from '@/components/novel/NovelCard';
import StoryFilters from '@/components/browse/StoryFilters';
import ListingSidebar from '@/components/browse/ListingSidebar';
import PaginationControls from '@/components/common/PaginationControls';
import { NovelCardInfo } from '@/types'; // Assuming NovelCardInfo is defined here

// --- Mock Data for Browse Page ---
const mockBrowseNovels: NovelCardInfo[] = [
  // Add 10-15 diverse mock novels here
  {
    id: 'browse-kiem-lai',
    title: 'Kiếm Lai',
    slug: 'kiem-lai',
    authorName: 'Phong Hỏa Hí Chư Hầu',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 1201,
    genres: [{ id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' }],
    synopsis: 'Một thế giới kiếm hiệp huyền ảo đầy rẫy những cuộc phiêu lưu và bí ẩn...' // Truncated synopsis
  },
  {
    id: 'browse-70-nguoi-dep',
    title: 'Thập Niên 70: Người Đẹp Sợ Giao Tiếp...',
    slug: '70-nguoi-dep',
    authorName: 'Tác Giả E',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 350,
    genres: [{ id: 'ngon-tinh', name: 'Ngôn Tình', slug: 'ngon-tinh' }],
    synopsis: 'Câu chuyện tình yêu lãng mạn và đầy thử thách trong bối cảnh thập niên 70.'
  },
  {
    id: 'browse-mot-to-hon-thu',
    title: 'Một Tờ Hôn Thư',
    slug: 'mot-to-hon-thu',
    authorName: 'Lục Dược',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 157,
    genres: [{ id: 'ngon-tinh', name: 'Ngôn Tình', slug: 'ngon-tinh' }, { id: 'completed', name: 'Completed', slug: 'completed' }],
    synopsis: 'Hôn nhân sắp đặt liệu có mang lại hạnh phúc? Một câu chuyện tình cảm động lòng người.'
  },
  // ... Add more mock novels (aim for ~12 total for grid demonstration)
   {
    id: 'browse-than-y-chay-nan',
    title: 'Lưu Đày Thần Y Mang Theo Không Gian...',
    slug: 'than-y-chay-nan',
    authorName: 'Tác Giả B',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 351,
    genres: [{ id: 'xuyen-khong', name: 'Xuyên Không', slug: 'xuyen-khong' }],
    synopsis: 'Xuyên không về cổ đại, trở thành thần y và đối mặt với vô vàn khó khăn.'
  },
  {
    id: 'browse-vo-thuong',
    title: 'Vô Thượng Thần Đế',
    slug: 'vo-thuong-than-de',
    authorName: 'Ốc Sên Ký Sinh',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 1225,
    genres: [{ id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' }],
    synopsis: 'Con đường tu tiên đầy gian nan để trở thành cường giả mạnh nhất vũ trụ.'
  },
  {
    id: 'browse-me-ke',
    title: 'Mẹ Kế Ở Cổ Đại Làm Cá Mặn',
    slug: 'me-ke-ca-man',
    authorName: 'Tác Giả D',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 215,
    genres: [{ id: 'co-dai', name: 'Cổ Đại', slug: 'co-dai' }],
    synopsis: 'Cuộc sống an nhàn và hài hước của một bà mẹ kế \'cá mặn\' thời cổ đại.'
  },
  {
    id: 'browse-70-lam-giau',
    title: 'Thập Niên 70: Sống Lại Làm Giàu',
    slug: '70-lam-giau',
    authorName: 'Tác Giả C',
    latestChapterNumber: 505,
    genres: [{ id: 'dien-van', name: 'Điền Văn', slug: 'dien-van' }],
    synopsis: 'Trọng sinh về thập niên 70, nắm bắt cơ hội để thay đổi vận mệnh và làm giàu.'
  },
  {
    id: 'browse-quy-doan-menh',
    title: 'Quỷ Đoản Mệnh Nhà Họ Tạ Sống Lâu...',
    slug: 'quy-doan-menh',
    authorName: 'Tác Giả H',
    coverImageUrl: '/placeholder-cover.jpg',
    latestChapterNumber: 957,
    genres: [{ id: 'huyen-huyen', name: 'Huyền Huyễn', slug: 'huyen-huyen' }, { id: 'completed', name: 'Completed', slug: 'completed' }],
    synopsis: 'Câu chuyện huyền huyễn kỳ bí về một nhân vật đặc biệt với số mệnh khác thường.'
  },
];

// --- Placeholder Data Fetching Function ---
async function getBrowseNovelData(/* filters, page */): Promise<NovelCardInfo[]> {
  console.log('Fetching mock browse novel data');
  // TODO: Replace with actual API call using filters and pagination
  return mockBrowseNovels;
}

// --- Page Component ---
export default async function BrowsePage() {
  // TODO: Get filter/pagination params from searchParams
  const novels = await getBrowseNovelData();

  return (
    <div className="container mx-auto px-4 mt-8">
      {/* TODO: Add actual Header component here */}
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Browse Stories</h1>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Main Content Area */}
        <div className="flex-grow">
          <StoryFilters />

          {/* Story Grid */}
          {novels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {novels.map((novel) => (
                <NovelCard key={novel.id} novel={novel} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">No stories found matching your criteria.</p>
          )}
//TODO:
          {/* Pagination */}
          {/* {novels.length > 0 && (
              <PaginationControls
                currentPage={1} // Replace with actual current page
                totalPages={Math.ceil(mockBrowseNovels.length / 12)} // Example: Replace with actual total pages
                onPageChange={(page) => console.log('Change to page:', page)} // Placeholder handler
             />
          )} */}
        </div>

        {/* Sidebar (Hidden on mobile, shown on lg+) */}
        <div className="hidden lg:block w-full lg:w-auto">
          <ListingSidebar />
        </div>
      </div>

       {/* TODO: Add actual Footer component here - Footer is typically in layout.tsx */}
    </div>
  );
} 