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
    searchParams: { [key: string]: string | string[] | undefined }; // To read query params
}

const GenrePage: React.FC<GenrePageProps> = async ({ params, searchParams }) => {
    const { genreSlug } = params;

    // Get current page from search params, default to 1
    const page = searchParams?.page ? parseInt(searchParams.page as string, 10) : 1;
    const currentPage = isNaN(page) || page < 1 ? 1 : page; // Validate page number

    // Fetch genre and paginated novels
    const genre = await getGenreDetails(genreSlug);
    const { novels: novelsInGenre, totalPages } = await getNovelsByGenre(
        genreSlug,
        currentPage,
        ITEMS_PER_PAGE
    );

    if (!genre) {
        // TODO: Implement a proper not found page
        return <div>Genre not found!</div>;
    }

    const basePath = `/the-loai/${genreSlug}`; // Base path for pagination links

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4 border-b pb-2">
                Truyện Thể Loại: <span className="text-blue-700">{genre.name}</span>
            </h1>

            {/* Optional: Add genre description here if available */}

            {novelsInGenre.length > 0 ? (
                <>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {novelsInGenre.map((novel) => (
                            <NovelCard key={novel.id} novel={novel} />
                        ))}
                    </div>
                    <PaginationControls
                        currentPage={currentPage}
                        totalPages={totalPages}
                        basePath={basePath}
                    />
                </>
            ) : (
                <p>Không tìm thấy truyện nào thuộc thể loại này.</p>
            )}
        </div>
    );
};

export default GenrePage; 