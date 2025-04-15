import React from 'react';
import Image from 'next/image'; // Use Next.js Image for optimization
import Link from 'next/link';
import { Novel, ChapterInfo } from '@/types'; // Import only Novel type directly

// --- Mock Data (for development) ---
const mockNovel: Novel = {
  id: 'kiem-lai',
  title: 'Kiếm Lai',
  slug: 'kiem-lai',
  author: { id: 1, name: 'Phong Hỏa Hí Chư Hầu' },
  genres: [
    { id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' },
    { id: 'huyen-huyen', name: 'Huyền Huyễn', slug: 'huyen-huyen' },
  ],
  coverImageUrl: '/placeholder-cover.jpg', // Add a placeholder image to /public later
  synopsis: 'Đây là một câu chuyện về một thiếu niên tên Trần Bình An, người mang trong mình một thanh kiếm và ước mơ trở thành kiếm tiên mạnh nhất...',
  rating: 4.8,
  status: 'Ongoing',
  totalChapters: 1200,
  latestChapter: {
    id: 1200,
    chapterNumber: 1200,
    title: 'Chương cuối cùng?',
    slug: 'chuong-1200',
    publishDate: '2024-07-27T10:00:00Z'
  }
};

// --- Mock Data (Add Chapter List) ---
// (mockNovel remains the same)
const mockChapterList: ChapterInfo[] = [
  { id: 1, chapterNumber: 1, slug: 'chuong-1', title: 'Mở đầu', publishDate: '2024-07-25T10:00:00Z' },
  { id: 2, chapterNumber: 2, slug: 'chuong-2', title: 'Gặp gỡ', publishDate: '2024-07-26T10:00:00Z' },
  { id: 3, chapterNumber: 3, slug: 'chuong-3', publishDate: '2024-07-27T10:00:00Z' }, // Chapter without title
  // ... Add more mock chapters if desired
  { id: 1200, chapterNumber: 1200, title: 'Chương cuối cùng?', slug: 'chuong-1200', publishDate: '2024-07-27T10:00:00Z' } // From mockNovel.latestChapter
];

// --- Page Component ---

// This function would normally fetch data based on the slug
// For now, it just returns the mock data
async function getNovelData(slug: string): Promise<Novel | null> {
  console.log(`Fetching data for slug: ${slug}`);
  // TODO: Replace with actual API call to your ASP.NET backend
  // Example: const response = await fetch(`your_api_url/novels/${slug}`);
  // const data = await response.json();
  // return data;

  // Return mock data if the slug matches, otherwise null
  if (slug === mockNovel.slug) {
    return mockNovel;
  }
  return null;
}

// Placeholder function to get chapter list
async function getChapterList(novelSlug: string): Promise<ChapterInfo[]> {
    console.log(`Fetching chapters for novel: ${novelSlug}`);
    // TODO: Replace with actual API call
    // Example: const response = await fetch(`your_api_url/novels/${novelSlug}/chapters`);
    // const data = await response.json();
    // return data;

    if (novelSlug === mockNovel.slug) {
        return mockChapterList;
    }
    return []; // Return empty array if novel slug doesn't match mock
}

interface NovelDetailPageProps {
  params: { slug: string }; // Next.js passes route params here
}

const NovelDetailPage: React.FC<NovelDetailPageProps> = async ({ params }) => {
  const { slug } = params;
  // Fetch both novel data and chapter list
  const novel = await getNovelData(slug);
  const chapterList = await getChapterList(slug); // Fetch chapter list

  if (!novel) {
    // TODO: Implement a proper not found page later
    return <div>Novel not found!</div>;
  }

  return (
    <div className="novel-detail-page">
      {/* Row 1: Cover Image and Basic Info */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-shrink-0 w-48 mx-auto md:mx-0">
          {novel.coverImageUrl ? (
            <Image
              src={novel.coverImageUrl}
              alt={`Cover for ${novel.title}`}
              width={192} // w-48 equivalent * 4 (Tailwind units are 0.25rem)
              height={288} // Example height, adjust as needed
              className="rounded shadow-lg"
              priority // Prioritize loading the cover image
            />
          ) : (
            <div className="w-48 h-72 bg-gray-300 rounded shadow-lg flex items-center justify-center text-gray-500">
              No Cover
            </div>
          )}
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">{novel.title}</h1>
          <p className="text-lg mb-1">Tác giả: <span className="text-blue-600 hover:text-blue-800 cursor-pointer">{novel.author.name}</span></p>
          <p className="mb-1">Thể loại: {novel.genres.map((genre, index) => (
            <React.Fragment key={genre.slug}>
              <Link href={`/the-loai/${genre.slug}`} className="text-blue-600 hover:text-blue-800">
                {genre.name}
              </Link>
              {index < novel.genres.length - 1 ? ', ' : ''}
            </React.Fragment>
          ))}</p>
          <p className="mb-1">Trạng thái: <span className="font-semibold">{novel.status}</span></p>
          <p className="mb-1">Số chương: <span className="font-semibold">{novel.totalChapters}</span></p>
          {novel.rating && <p className="mb-3">Đánh giá: <span className="font-semibold text-yellow-500">{novel.rating}/5</span></p>}
          {/* TODO: Add buttons: Read First Chapter, Read Latest Chapter, Add to Library */}
          <div className="flex gap-3 justify-center md:justify-start">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Đọc từ đầu
            </button>
            {novel.latestChapter && (
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Đọc mới nhất ({novel.latestChapter.chapterNumber})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Row 2: Synopsis */}
      <div className="mb-6 border-t pt-4">
        <h2 className="text-2xl font-semibold mb-2">Giới thiệu</h2>
        <p className="text-gray-700 whitespace-pre-line">{novel.synopsis}</p>
      </div>

      {/* Row 3: Chapter List - Updated */}
      <div className="border-t pt-4">
        <h2 className="text-2xl font-semibold mb-3">Danh sách chương</h2>
        {chapterList.length > 0 ? (
          <ul className="list-none space-y-2 max-h-96 overflow-y-auto pr-2"> {/* Added scroll for long lists */}
            {chapterList.map((chapter) => (
              <li key={chapter.id} className="border-b pb-1">
                <Link
                  href={`/truyen/${novel.slug}/doc/${chapter.slug}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Chương {chapter.chapterNumber}{chapter.title ? `: ${chapter.title}` : ''}
                </Link>
                {/* Optional: Display publish date */}
                {/* {chapter.publishDate && <span className="text-sm text-gray-500 ml-2">{new Date(chapter.publishDate).toLocaleDateString()}</span>} */}
              </li>
            ))}
          </ul>
        ) : (
          <p>Chưa có chương nào.</p>
        )}
      </div>
    </div>
  );
};

export default NovelDetailPage; 