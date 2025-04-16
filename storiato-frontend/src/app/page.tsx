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
    <div className="space-y-8"> {/* Add spacing between sections */}
      {/* Hot Novels Section */}
      <section>
        <h1 className="text-2xl font-semibold mb-4 border-b pb-2">Truyện Hot</h1>
        {hotNovels.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {hotNovels.map((novel) => (
              <NovelCard key={`hot-${novel.id}`} novel={novel} /> // Added key prefix
            ))}
          </div>
        ) : (
          <p>Không tìm thấy truyện hot nào.</p>
        )}
      </section>

      {/* New Updates Section - Added */}
      <section>
        <h1 className="text-2xl font-semibold mb-4 border-b pb-2">Mới Cập Nhật</h1>
        {newUpdates.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {newUpdates.map((novel) => (
              <NovelCard key={`update-${novel.id}`} novel={novel} /> // Added key prefix
            ))}
          </div>
        ) : (
          <p>Không tìm thấy truyện mới cập nhật nào.</p>
        )}
      </section>

      {/* Completed Novels Section - Added */}
      <section>
        <h1 className="text-2xl font-semibold mb-4 border-b pb-2">Truyện Full</h1>
        {completedNovels.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {completedNovels.map((novel) => (
              <NovelCard key={`completed-${novel.id}`} novel={novel} /> // Added key prefix
            ))}
          </div>
        ) : (
          <p>Không tìm thấy truyện full nào.</p>
        )}
      </section>

      {/* Thư Viễn Novels Section - Added */}
      <section>
        <h1 className="text-2xl font-semibold mb-4 border-b pb-2">Truyện của Thư Viễn</h1>
        {thuVienNovels.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {thuVienNovels.map((novel) => (
              <NovelCard key={`thu-vien-${novel.id}`} novel={novel} /> // Added key prefix
            ))}
          </div>
        ) : (
          <p>Không tìm thấy truyện nào của tác giả Thư Viễn.</p>
        )}
      </section>

      {/* Mira Novels Section - Added */}
      <section>
        <h1 className="text-2xl font-semibold mb-4 border-b pb-2">Truyện của Mira</h1>
        {miraNovels.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {miraNovels.map((novel) => (
              <NovelCard key={`mira-${novel.id}`} novel={novel} /> // Added key prefix
            ))}
          </div>
        ) : (
          <p>Không tìm thấy truyện nào của tác giả Mira.</p>
        )}
      </section>

      {/* TODO: Add sections for Genres, Completed Novels, etc. */}
    </div>
  );
} 