import React from 'react';
import { notFound } from 'next/navigation';
import { Novel, ChapterInfo } from '@/types';

// Import page-specific components
import StoryHeader from '@/components/story/StoryHeader';
import SynopsisSection from '@/components/story/SynopsisSection';
import ChapterList from '@/components/story/ChapterList';
import CommentsSection from '@/components/story/CommentsSection';
import DetailSidebar from '@/components/story/DetailSidebar';

// --- Mock Data & Fetch Function ---

const mockChapters: ChapterInfo[] = Array.from({ length: 125 }, (_, i) => ({
  id: `ch-${i + 1}`,
  chapterNumber: i + 1,
  title: `Chapter ${i + 1}: The Adventure Begins... Again?`,
  slug: `chuong-${i + 1}`,
  publishDate: new Date(Date.now() - (125 - i) * 24 * 60 * 60 * 1000).toISOString(), // Simulate past dates
}));

const mockStoryDetails: { [key: string]: Novel } = {
  'kiem-lai': {
    id: 'kiem-lai',
    title: 'Kiếm Lai',
    slug: 'kiem-lai',
    author: { id: 'phhch', name: 'Phong Hỏa Hí Chư Hầu' },
    genres: [
      { id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' },
      { id: 'huyen-huyen', name: 'Huyền Huyễn', slug: 'huyen-huyen' },
    ],
    coverImageUrl: '/placeholder-cover.jpg',
    synopsis: 'Trần Bình An, một thiếu niên bình thường từ Ly Châu Đồng Diệp Phái, mang trong mình một thanh kiếm gỗ đào và một trách nhiệm nặng nề. Hành trình của hắn không chỉ là tìm kiếm đạo pháp mà còn là khám phá những bí ẩn của thế giới và bản thân. Câu chuyện trải dài qua nhiều vùng đất, gặp gỡ vô số nhân vật với những số phận khác nhau, từ tiên nhân cao cao tại thượng đến yêu ma quỷ quái, tất cả đều góp phần tạo nên một bức tranh kiếm hiệp huyền ảo đầy màu sắc và sâu sắc.',
    rating: 4.8,
    status: 'Ongoing',
    totalChapters: 1201,
    latestChapter: mockChapters[mockChapters.length - 1],
  },
  'mot-to-hon-thu': {
     id: 'mot-to-hon-thu',
    title: 'Một Tờ Hôn Thư',
    slug: 'mot-to-hon-thu',
    author: { id: 'luc-duoc', name: 'Lục Dược' },
    genres: [
        { id: 'ngon-tinh', name: 'Ngôn Tình', slug: 'ngon-tinh' },
        { id: 'hien-dai', name: 'Hiện Đại', slug: 'hien-dai' },
    ],
    coverImageUrl: '/placeholder-cover.jpg',
    synopsis: 'Một tờ hôn thư bất ngờ xuất hiện, ràng buộc hai con người xa lạ. Liệu tình yêu có nảy nở từ cuộc hôn nhân sắp đặt này? Những tình huống dở khóc dở cười, những hiểu lầm và thử thách sẽ dẫn dắt họ đi đến đâu?',
    rating: 4.5,
    status: 'Completed',
    totalChapters: 157,
     latestChapter: mockChapters[156],
  },
  // Add more mock stories if needed
};

// Placeholder function to get story details by slug
async function getStoryDetails(slug: string): Promise<Novel | null> {
  console.log(`Fetching mock story details for slug: ${slug}`);
  // TODO: Replace with actual API call: GET /api/novels/{slug}
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 50));
  return mockStoryDetails[slug] || null;
}

// Placeholder function to get chapters for a story
async function getStoryChapters(slug: string): Promise<ChapterInfo[]> {
    console.log(`Fetching mock chapters for slug: ${slug}`);
    // TODO: Replace with actual API call: GET /api/novels/{slug}/chapters?page=1&limit=all (or implement pagination)
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 50));
    // Return all mock chapters for now, actual implementation needs pagination
    if (mockStoryDetails[slug]) {
        return mockChapters.slice(0, mockStoryDetails[slug].totalChapters);
    }
    return [];
}

// --- Page Component ---
interface StoryDetailPageProps {
  params: { slug: string };
}

export default async function StoryDetailPage({ params }: StoryDetailPageProps) {
  const { slug } = params;
  const story = await getStoryDetails(slug);
  const chapters = await getStoryChapters(slug);

  if (!story) {
    notFound(); // Trigger 404 page if story not found
  }

  return (
    <div className="container mx-auto px-4 mt-8">
      {/* TODO: Add actual Header component here */}

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Main Content Area */}
        <div className="flex-grow space-y-6">
          <StoryHeader story={story} />
          <SynopsisSection synopsis={story.synopsis} />
          <ChapterList chapters={chapters} novelSlug={story.slug} totalChapters={story.totalChapters} />
          <CommentsSection />
        </div>

        {/* Sidebar (Hidden on mobile, shown on lg+) */}
        <div className="hidden lg:block w-full lg:w-auto mt-[calc(theme(spacing.6))] /* Align top roughly with Synopsis */">
           {/* Pass necessary props to sidebar */}
          <DetailSidebar author={story.author} />
        </div>
      </div>

      {/* TODO: Add actual Footer component here - Footer is typically in layout.tsx */}
    </div>
  );
}

// Optional: Generate static paths for known slugs during build time (improves performance)
// export async function generateStaticParams() {
//   const knownSlugs = Object.keys(mockStoryDetails);
//   return knownSlugs.map((slug) => ({ slug }));
// } 