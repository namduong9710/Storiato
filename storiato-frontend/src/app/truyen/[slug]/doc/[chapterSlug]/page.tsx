"use client"; // <--- Make it a Client Component

import React, { useState, useEffect } from 'react'; // Import hooks
import Link from 'next/link';
import { ChapterContent } from '@/types';

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
interface ChapterPageProps {
    params: {
        slug: string; // novel slug
        chapterSlug: string;
    };
}

// Map numerical font size state to Tailwind classes
const fontSizeClasses: { [key: number]: string } = {
  1: 'text-sm',  // Small
  2: 'text-base', // Default/Medium
  3: 'text-lg',  // Large
  4: 'text-xl',  // Extra Large
  5: 'text-2xl', // 2XL
};
const defaultFontSize = 2; // Start with base size

// --- Theme Config ---
type Theme = 'light' | 'sepia' | 'dark';

interface ThemeConfig {
    bodyClass: string; // Applied to the outer div
    proseClass: string; // Potentially adjust prose styles too
}

const themeClasses: Record<Theme, ThemeConfig> = {
    light: {
        bodyClass: 'bg-white text-gray-900',
        proseClass: 'prose' // Default prose is light-themed
    },
    sepia: {
        bodyClass: 'bg-[#fbf0d9] text-[#5b4636]', // Sepia background and text
        proseClass: 'prose prose-p:text-[#5b4636] prose-headings:text-[#5b4636]' // Adjust prose colors for sepia
    },
    dark: {
        bodyClass: 'bg-gray-900 text-gray-300',
        proseClass: 'prose prose-invert' // Prose invert for dark mode
    },
};
const defaultTheme: Theme = 'light';

const ChapterPage: React.FC<ChapterPageProps> = ({ params }) => {
    const { slug: novelSlug, chapterSlug } = params;

    const [chapter, setChapter] = useState<ChapterContent | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [fontSize, setFontSize] = useState<number>(defaultFontSize); // State for font size level
    const [theme, setTheme] = useState<Theme>(defaultTheme); // State for theme

    // TODO: Implement logic to find actual previous/next slugs based on chapter list
    const [prevChapterSlug, setPrevChapterSlug] = useState<string | null>(null);
    const [nextChapterSlug, setNextChapterSlug] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getChapterData(novelSlug, chapterSlug);
                setChapter(data);
                if (!data) {
                    setError("Chapter not found!");
                }
                // --- Mock finding prev/next ---
                // This is basic mock logic, replace with real chapter list lookup later
                const currentNum = data?.chapterNumber ?? 0;
                const prevNum = currentNum > 1 ? currentNum - 1 : null;
                const nextNum = currentNum > 0 ? currentNum + 1 : null; // Assume next exists for demo
                 // Find slugs from mock data store keys (VERY inefficient, just for demo)
                setPrevChapterSlug(prevNum ? `chuong-${prevNum}` : null);
                setNextChapterSlug(nextNum ? `chuong-${nextNum}`: null);
                // --- End Mock prev/next ---

            } catch (err) {
                setError(err instanceof Error ? err.message : "An unknown error occurred");
                setChapter(null);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [novelSlug, chapterSlug]); // Re-fetch if slugs change

    const increaseFontSize = () => {
        setFontSize((currentSize) => Math.min(currentSize + 1, Object.keys(fontSizeClasses).length));
    };

    const decreaseFontSize = () => {
        setFontSize((currentSize) => Math.max(currentSize - 1, 1));
    };

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme);
        // Optional: Save theme preference to localStorage
        // localStorage.setItem('readingTheme', newTheme);
    };

    if (loading) {
        return <div className="text-center p-10">Loading chapter...</div>; // Basic loading state
    }

    if (error || !chapter) {
        return <div className="text-center p-10 text-red-600">{error || "Chapter not found!"}</div>;
    }

    const currentFontSizeClass = fontSizeClasses[fontSize];
    const currentTheme = themeClasses[theme];

    return (
        <div className={`chapter-reading-page max-w-3xl mx-auto px-4 pb-10 ${currentTheme.bodyClass}`}>
            {/* Chapter Info Header */}
            <div className="text-center my-4 border-b pb-4 border-gray-500/50">
                <h1 className="text-2xl md:text-3xl font-bold mb-1">
                    <Link href={`/truyen/${chapter.novelSlug}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                        {chapter.novelTitle}
                    </Link>
                </h1>
                <h2 className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                    Chương {chapter.chapterNumber}{chapter.title ? `: ${chapter.title}` : ''}
                </h2>
            </div>

            {/* Reading Settings */}
            <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 mb-6 text-sm">
                <div className="flex items-center gap-2">
                    <span>Font Size:</span>
                    <button
                        onClick={decreaseFontSize}
                        disabled={fontSize === 1}
                        className="px-2 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100/50 bg-opacity-50"
                        aria-label="Decrease font size"
                    > A- </button>
                    <span className="w-6 text-center">{fontSize}</span>
                    <button
                        onClick={increaseFontSize}
                        disabled={fontSize === Object.keys(fontSizeClasses).length}
                        className="px-2 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100/50 bg-opacity-50"
                         aria-label="Increase font size"
                   > A+ </button>
                </div>
                <div className="flex items-center gap-2">
                   <span>Theme:</span>
                    <button
                        onClick={() => handleThemeChange('light')}
                        className={`w-6 h-6 rounded-full border ${theme === 'light' ? 'ring-2 ring-blue-500' : ''} bg-white`}
                        aria-label="Light theme"
                    />
                     <button
                        onClick={() => handleThemeChange('sepia')}
                        className={`w-6 h-6 rounded-full border border-sepia-dark ${theme === 'sepia' ? 'ring-2 ring-blue-500' : ''} bg-[#fbf0d9]`}
                        aria-label="Sepia theme"
                    />
                    <button
                        onClick={() => handleThemeChange('dark')}
                        className={`w-6 h-6 rounded-full border ${theme === 'dark' ? 'ring-2 ring-blue-500' : ''} bg-gray-800`}
                        aria-label="Dark theme"
                    />
                </div>
            </div>

            {/* Chapter Content */}
            <div className={`${currentTheme.proseClass} ${currentFontSizeClass} max-w-none mb-8 leading-relaxed`}>
                {chapter.content.trim().split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                        {paragraph || '\u00A0'}
                    </p>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className={`flex justify-between items-center border-t pt-4 sticky bottom-0 py-3 shadow- ऊपर border-gray-500/50 ${currentTheme.bodyClass}`}>
                <Link
                    href={prevChapterSlug ? `/truyen/${chapter.novelSlug}/doc/${prevChapterSlug}` : '#'}
                     className={`px-4 py-2 rounded text-white text-sm ${prevChapterSlug ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed opacity-70'}`}
                    aria-disabled={!prevChapterSlug}
                    prefetch={!!prevChapterSlug}
                >
                    Chương trước
                </Link>
                <Link href={`/truyen/${chapter.novelSlug}`} className={`${theme === 'dark' ? 'text-blue-400 hover:text-blue-300': 'text-blue-600 hover:text-blue-800'} text-sm`}>
                    Danh sách chương
                </Link>
                <Link
                     href={nextChapterSlug ? `/truyen/${chapter.novelSlug}/doc/${nextChapterSlug}` : '#'}
                     className={`px-4 py-2 rounded text-white text-sm ${nextChapterSlug ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed opacity-70'}`}
                     aria-disabled={!nextChapterSlug}
                     prefetch={!!nextChapterSlug}
                >
                    Chương sau
                </Link>
            </div>
        </div>
    );
};

export default ChapterPage; 