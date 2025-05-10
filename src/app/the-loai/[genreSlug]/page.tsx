import React from 'react';
import NovelCard from '@/components/novel/NovelCard';
import PaginationControls from '@/components/ui/PaginationControls';
import { Genre, NovelCardInfo } from '@/types';

// --- Mock Data ---

// Example list of all genres (could be fetched from API later)
const allMockGenres: Genre[] = [
    { id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' },
    { id: 'huyen-huyen', name: 'Huyền Huyễn', slug: 'huyen-huyen' },
    { id: 'xuyen-khong', name: 'Xuyên Không', slug: 'xuyen-khong' },
    { id: 'dien-van', name: 'Điền Văn', slug: 'dien-van' },
    { id: 'co-dai', name: 'Cổ Đại', slug: 'co-dai' },
    { id: 'ngon-tinh', name: 'Ngôn Tình', slug: 'ngon-tinh' },
    // Add more genres...
];

// Example list of all novels (simplified for filtering)
// In a real app, the API would handle filtering
const allMockNovels: NovelCardInfo[] = [
    { id: 'kiem-lai', title: 'Kiếm Lai', slug: 'kiem-lai', authorName: 'Phong Hỏa Hí Chư Hầu', coverImageUrl: '/placeholder-cover.jpg', latestChapterNumber: 1200, genres: [{ id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' }, { id: 'huyen-huyen', name: 'Huyền Huyễn', slug: 'huyen-huyen' }] },
    { id: 'than-y-chay-nan', title: 'Lưu Đày Thần Y Mang Theo Không Gian Chạy Nạn', slug: 'than-y-chay-nan', authorName: 'Tác Giả B', coverImageUrl: '/placeholder-cover.jpg', latestChapterNumber: 350, genres: [{ id: 'xuyen-khong', name: 'Xuyên Không', slug: 'xuyen-khong' }] },
    { id: '70-lam-giau', title: 'Thập Niên 70: Sống Lại Làm Giàu', slug: '70-lam-giau', authorName: 'Tác Giả C', latestChapterNumber: 500, genres: [{ id: 'dien-van', name: 'Điền Văn', slug: 'dien-van' }, { id: 'xuyen-khong', name: 'Xuyên Không', slug: 'xuyen-khong' }] },
    { id: 'vo-thuong-than-de', title: 'Vô Thượng Thần Đế', slug: 'vo-thuong-than-de', authorName: 'Ốc Sên Ký Sinh', coverImageUrl: '/placeholder-cover.jpg', latestChapterNumber: 1220, genres: [{ id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' }] },
    { id: 'me-ke-ca-man', title: 'Mẹ Kế Ở Cổ Đại Làm Cá Mặn', slug: 'me-ke-ca-man', authorName: 'Tác Giả D', coverImageUrl: '/placeholder-cover.jpg', latestChapterNumber: 215, genres: [{ id: 'co-dai', name: 'Cổ Đại', slug: 'co-dai' }] },
    // Add more novels...
];

const ITEMS_PER_PAGE = 2; // Define how many novels per page

// --- Placeholder Data Fetching Functions ---

async function getGenreDetails(slug: string): Promise<Genre | null> {
    console.log(`Fetching genre details for slug: ${slug}`);
    // TODO: Replace with API call if needed (e.g., to get genre description)
    const genre = allMockGenres.find(g => g.slug === slug);
    return genre || null;
}

async function getNovelsByGenre(
    genreSlug: string,
    page: number = 1, // Add page parameter
    limit: number = ITEMS_PER_PAGE // Add limit parameter
): Promise<{ novels: NovelCardInfo[]; totalPages: number }> {
    console.log(`Fetching novels for genre: ${genreSlug}, page: ${page}`);
    // TODO: Replace with API call: GET /api/novels?genre=${genreSlug}&page=${page}&limit=${limit}
    // The API should return paginated data and total count/pages

    // Simulate filtering
    const filteredNovels = allMockNovels.filter(novel =>
        novel.genres?.some(g => g.slug === genreSlug)
    );

    // Simulate pagination
    const totalItems = filteredNovels.length;
    const totalPages = Math.ceil(totalItems / limit);
    const offset = (page - 1) * limit;
    const paginatedNovels = filteredNovels.slice(offset, offset + limit);

    return { novels: paginatedNovels, totalPages };
}

// --- Page Component ---

interface GenrePageProps {
    params: { genreSlug: string };
    // Define searchParams structure more accurately if known
    searchParams?: { [key: string]: string | string[] | undefined };
}

// Change component to async function for await and correct searchParams handling
export default async function GenrePage({ params, searchParams }: GenrePageProps) {
    const { genreSlug } = params;

    // Get current page from search params, default to 1
    // Use optional chaining (?.) for safety
    const page = searchParams?.page ? parseInt(searchParams.page as string, 10) : 1;
    const currentPage = isNaN(page) || page < 1 ? 1 : page; // Validate page number

    // Fetch genre and paginated novels (await is already used correctly)
    const genre = await getGenreDetails(genreSlug);
    const { novels: novelsInGenre, totalPages } = await getNovelsByGenre(
        genreSlug,
        currentPage,
        ITEMS_PER_PAGE
    );

    if (!genre) {
        // TODO: Implement a proper not found page using notFound()
        // import { notFound } from 'next/navigation';
        // notFound();
        return <div>Genre not found!</div>; // Placeholder until notFound() is added
    }

    const basePath = `/the-loai/${genreSlug}`; // Base path for pagination links

    return (
        <div className="container mx-auto px-4 mt-8">
            <h1 className="text-3xl font-bold mb-6 dark:text-white">
                Genre: <span className="text-blue-600 dark:text-blue-400">{genre.name}</span>
            </h1>

            {/* TODO: Add filtering/sorting options here? Similar to Browse page? */}

            {novelsInGenre.length > 0 ? (
                <>
                    {/* Use a similar grid as the Browse page */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                        {novelsInGenre.map((novel) => (
                            <NovelCard key={novel.id} novel={novel} />
                        ))}
                    </div>
                    {/* Use the common PaginationControls component */}
                    {totalPages > 1 && (
                         <PaginationControls
                            currentPage={currentPage}
                            totalPages={totalPages}
                            basePath={basePath} // Pass basePath if your component uses it
                            // If PaginationControls needs onPageChange, this page needs to be a Client Component
                            // or use a Client Component wrapper for pagination.
                            // For now, assuming basePath is sufficient for Server Component pagination.
                        />
                    )}
                </>
            ) : (
                <p className="text-center text-gray-500 dark:text-gray-400">No stories found in this genre.</p>
            )}
        </div>
    );
} 