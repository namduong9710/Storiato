"use client"; // <--- Make it a Client Component

import React, { useState, useEffect } from 'react'; // Import hooks
import Link from 'next/link';
import { ChapterContent } from '@/types';
import { notFound } from 'next/navigation';

// Import page-specific components
import ReadingHeader from '@/components/reading/ReadingHeader';
import ChapterContentDisplay from '@/components/reading/ChapterContentDisplay';

// --- Mock Data (kept inside for now) ---
const mockChapterDataStore: { [key: string]: ChapterContent } = {
    'kiem-lai/chuong-1': {
        id: 1, chapterNumber: 1, title: 'Mở đầu', slug: 'chuong-1', publishDate: '2024-07-25T10:00:00Z', novelSlug: 'kiem-lai', novelTitle: 'Kiếm Lai',
        content: `Gió thổi nhẹ qua khu rừng trúc, tạo nên những âm thanh xào xạc.\nTrần Bình An ngồi bên bờ suối, thanh kiếm gỗ đặt cạnh. Cậu nhìn dòng nước chảy, ánh mắt xa xăm.\n"Kiếm đạo..." Cậu lẩm bẩm.\nCon đường này thật dài và gian nan. Liệu cậu có thể đi đến cuối cùng?\nMột chiếc lá trúc rơi nhẹ xuống mặt nước, tạo thành những vòng sóng lan tỏa.`
    },
    'kiem-lai/chuong-2': {
        id: 2, chapterNumber: 2, title: 'Gặp gỡ', slug: 'chuong-2', publishDate: '2024-07-26T10:00:00Z', novelSlug: 'kiem-lai', novelTitle: 'Kiếm Lai',
        content: `Bình An gặp một lão già bí ẩn dưới gốc cây cổ thụ.\nLão già nhìn cậu, ánh mắt thâm sâu.\n"Ngươi muốn học kiếm?"\nTim Bình An đập mạnh.`
    },
     'kiem-lai/chuong-3': {
        id: 3, chapterNumber: 3, slug: 'chuong-3', publishDate: '2024-07-27T10:00:00Z', novelSlug: 'kiem-lai', novelTitle: 'Kiếm Lai',
        content: `Chương này không có tiêu đề, chỉ có nội dung.`
    },
     'kiem-lai/chuong-1200': {
        id: 1200, chapterNumber: 1200, title: 'Chương cuối cùng?', slug: 'chuong-1200', publishDate: '2024-07-27T10:00:00Z', novelSlug: 'kiem-lai', novelTitle: 'Kiếm Lai',
        content: `Hành trình đã đến hồi kết? Hay chỉ là một khởi đầu mới?`
    },
    // Add other mock chapters as needed...
};

// --- Placeholder Client-Side Data Fetching Function ---
async function getChapterData(novelSlug: string, chapterSlug: string): Promise<ChapterContent | null> {
    console.log(`Client Fetching chapter: ${chapterSlug} for novel: ${novelSlug}`);
    // TODO: Replace with actual API call using src/lib/api.ts getChapterDetails()
    const key = `${novelSlug}/${chapterSlug}`;
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 150)); // 150ms delay
    return mockChapterDataStore[key] || null;
}

// --- Page Component ---
interface ReadingPageProps {
    params: {
        slug: string; // Novel slug
        chapterSlug: string;
    };
}

export default async function ReadingPage({ params }: ReadingPageProps) {
    const { slug, chapterSlug } = params;
    const chapterData = await getChapterData(slug, chapterSlug);

    if (!chapterData) {
        notFound(); // Trigger 404 page if chapter not found
    }

    // Determine prev/next slugs directly from fetched data
    const prevChapterSlug = chapterData.prevChapterSlug;
    const nextChapterSlug = chapterData.nextChapterSlug;

    return (
        <div className="reading-page">
            {/* Header component provides chapter navigation */}
            <ReadingHeader
                novelTitle={chapterData.novelTitle}
                novelSlug={chapterData.novelSlug}
                chapterTitle={chapterData.title}
                chapterNumber={chapterData.chapterNumber}
                prevChapterSlug={prevChapterSlug} // Use fetched value
                nextChapterSlug={nextChapterSlug} // Use fetched value
            />

            {/* Main chapter content area */}
            <ChapterContentDisplay content={chapterData.content} />

            {/* Footer Nav */}
            <div className="container mx-auto px-4 py-4 text-center text-sm">
                <div className="flex items-center justify-center gap-4">
                    <Link
                        href={prevChapterSlug ? `/truyen/${slug}/doc/${prevChapterSlug}` : '#'}
                        className={`p-2 rounded ${prevChapterSlug ? 'text-blue-600 dark:text-blue-400 hover:underline' : 'text-gray-400 dark:text-gray-600 cursor-not-allowed'}`}
                        aria-disabled={!prevChapterSlug}
                    >
                        Previous Chapter
                    </Link>
                    <Link href={`/truyen/${slug}`} className="text-gray-700 dark:text-gray-300 hover:underline">
                        Back to Index
                    </Link>
                    <Link
                        href={nextChapterSlug ? `/truyen/${slug}/doc/${nextChapterSlug}` : '#'}
                        className={`p-2 rounded ${nextChapterSlug ? 'text-blue-600 dark:text-blue-400 hover:underline' : 'text-gray-400 dark:text-gray-600 cursor-not-allowed'}`}
                        aria-disabled={!nextChapterSlug}
                    >
                        Next Chapter
                    </Link>
                </div>
            </div>
        </div>
    );
}

// ... (generateStaticParams remains the same) 