import React from 'react';
import Link from 'next/link';
import { ChapterContent } from '@/types'; // Use the specific type for chapter content

// --- Mock Data ---
const mockChapter: ChapterContent = {
    id: 1,
    chapterNumber: 1,
    title: 'Mở đầu',
    slug: 'chuong-1',
    publishDate: '2024-07-25T10:00:00Z',
    novelSlug: 'kiem-lai',
    novelTitle: 'Kiếm Lai',
    content: `
Gió thổi nhẹ qua khu rừng trúc, tạo nên những âm thanh xào xạc.
Trần Bình An ngồi bên bờ suối, thanh kiếm gỗ đặt cạnh. Cậu nhìn dòng nước chảy, ánh mắt xa xăm.
"Kiếm đạo..." Cậu lẩm bẩm.
Con đường này thật dài và gian nan. Liệu cậu có thể đi đến cuối cùng?
Một chiếc lá trúc rơi nhẹ xuống mặt nước, tạo thành những vòng sóng lan tỏa.
    ` // Simple multi-line content
};

// --- Placeholder Data Fetching Function ---
async function getChapterData(novelSlug: string, chapterSlug: string): Promise<ChapterContent | null> {
    console.log(`Fetching chapter: ${chapterSlug} for novel: ${novelSlug}`);
    // TODO: Replace with actual API call
    // Example: const response = await fetch(`your_api_url/novels/${novelSlug}/chapters/${chapterSlug}`);
    // const data = await response.json();
    // return data;

    // Return mock data if slugs match
    if (novelSlug === mockChapter.novelSlug && chapterSlug === mockChapter.slug) {
        return mockChapter;
    }
    return null;
}

// --- Page Component ---
interface ChapterPageProps {
    params: {
        slug: string; // novel slug
        chapterSlug: string;
    };
}

const ChapterPage: React.FC<ChapterPageProps> = async ({ params }) => {
    const { slug: novelSlug, chapterSlug } = params;
    const chapter = await getChapterData(novelSlug, chapterSlug);

    if (!chapter) {
        // TODO: Implement not found page
        return <div>Chapter not found!</div>;
    }

    // TODO: Get previous/next chapter info for navigation buttons
    const prevChapterSlug = null; // Example: 'chuong-0' (replace with actual logic/data)
    const nextChapterSlug = 'chuong-2'; // Example: 'chuong-2' (replace with actual logic/data)

    return (
        <div className="chapter-reading-page max-w-3xl mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
                <Link href={`/truyen/${chapter.novelSlug}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                    {chapter.novelTitle}
                </Link>
            </h1>
            <h2 className="text-xl md:text-2xl text-center text-gray-700 mb-6">
                Chương {chapter.chapterNumber}{chapter.title ? `: ${chapter.title}` : ''}
            </h2>

            {/* TODO: Add Reading Settings (font size, background color) */}

            {/* Chapter Content */}
            {/* Using 'prose' class from Tailwind Typography for nice text formatting */}
            <div className="prose lg:prose-xl max-w-none mb-8 leading-relaxed">
                {/* Split content by newline and render paragraphs */}
                {chapter.content.trim().split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center border-t pt-4">
                <Link
                    href={prevChapterSlug ? `/truyen/${chapter.novelSlug}/doc/${prevChapterSlug}` : '#'}
                    className={`px-4 py-2 rounded text-white ${prevChapterSlug ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
                    aria-disabled={!prevChapterSlug}
                >
                    Chương trước
                </Link>
                <Link href={`/truyen/${chapter.novelSlug}`} className="text-blue-600 hover:text-blue-800">
                    Danh sách chương
                </Link>
                <Link
                    href={nextChapterSlug ? `/truyen/${chapter.novelSlug}/doc/${nextChapterSlug}` : '#'}
                    className={`px-4 py-2 rounded text-white ${nextChapterSlug ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
                    aria-disabled={!nextChapterSlug}
                >
                    Chương sau
                </Link>
            </div>
        </div>
    );
};

export default ChapterPage; 