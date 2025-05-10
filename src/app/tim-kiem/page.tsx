import React from 'react';
import NovelCard from '@/components/novel/NovelCard';
import PaginationControls from '@/components/ui/PaginationControls';
import { NovelCardInfo } from '@/types'; // Import necessary types

// --- Mock Data (Copied from Genre page for filtering simulation) ---
// In a real app, the API would handle the search
const allMockNovels: NovelCardInfo[] = [
     { id: 'kiem-lai', title: 'Kiếm Lai', slug: 'kiem-lai', authorName: 'Phong Hỏa Hí Chư Hầu', coverImageUrl: '/placeholder-cover.jpg', latestChapterNumber: 1200, genres: [{ id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' }, { id: 'huyen-huyen', name: 'Huyền Huyễn', slug: 'huyen-huyen' }] },
    { id: 'than-y-chay-nan', title: 'Lưu Đày Thần Y Mang Theo Không Gian Chạy Nạn', slug: 'than-y-chay-nan', authorName: 'Tác Giả B', coverImageUrl: '/placeholder-cover.jpg', latestChapterNumber: 350, genres: [{ id: 'xuyen-khong', name: 'Xuyên Không', slug: 'xuyen-khong' }] },
    { id: '70-lam-giau', title: 'Thập Niên 70: Sống Lại Làm Giàu', slug: '70-lam-giau', authorName: 'Tác Giả C', latestChapterNumber: 500, genres: [{ id: 'dien-van', name: 'Điền Văn', slug: 'dien-van' }, { id: 'xuyen-khong', name: 'Xuyên Không', slug: 'xuyen-khong' }] },
    { id: 'vo-thuong-than-de', title: 'Vô Thượng Thần Đế', slug: 'vo-thuong-than-de', authorName: 'Ốc Sên Ký Sinh', coverImageUrl: '/placeholder-cover.jpg', latestChapterNumber: 1220, genres: [{ id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' }] },
    { id: 'me-ke-ca-man', title: 'Mẹ Kế Ở Cổ Đại Làm Cá Mặn', slug: 'me-ke-ca-man', authorName: 'Tác Giả D', coverImageUrl: '/placeholder-cover.jpg', latestChapterNumber: 215, genres: [{ id: 'co-dai', name: 'Cổ Đại', slug: 'co-dai' }] },
     { id: '70-nguoi-dep', title: 'Thập Niên 70: Người Đẹp Sợ Giao Tiếp Gả Cho Ác Bá', slug: '70-nguoi-dep', authorName: 'Tác Giả E', coverImageUrl: '/placeholder-cover.jpg', latestChapterNumber: 350, genres: [{ id: 'ngon-tinh', name: 'Ngôn Tình', slug: 'ngon-tinh' }] },
     { id: '70-hanh-phuc', title: 'Thập Niên 70, Những Năm Tháng Hạnh Phúc', slug: '70-hanh-phuc', authorName: 'Tác Giả F', latestChapterNumber: 616, genres: [{ id: 'ngon-tinh', name: 'Ngôn Tình', slug: 'ngon-tinh' }] },
];

const ITEMS_PER_PAGE = 4; // Set items per page for search results

// --- Updated Placeholder Data Fetching Function ---
async function searchNovels(
    query: string,
    page: number = 1,
    limit: number = ITEMS_PER_PAGE
): Promise<{ results: NovelCardInfo[]; totalPages: number }> {
    console.log(`Searching novels for query: ${query}, page: ${page}`);
    // TODO: Replace with API call: GET /api/search?q=${query}&page=${page}&limit=${limit}

    if (!query) {
        return { results: [], totalPages: 0 };
    }

    // Simulate case-insensitive search on title and author
    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = allMockNovels.filter(novel =>
        novel.title.toLowerCase().includes(lowerCaseQuery) ||
        novel.authorName.toLowerCase().includes(lowerCaseQuery)
    );

    // Simulate pagination
    const totalItems = filteredResults.length;
    const totalPages = Math.ceil(totalItems / limit);
    const offset = (page - 1) * limit;
    const paginatedResults = filteredResults.slice(offset, offset + limit);

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 200));

    return { results: paginatedResults, totalPages };
}

// --- Page Component ---

interface SearchPageProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

const SearchPage: React.FC<SearchPageProps> = async ({ searchParams }) => {
    const query = (searchParams?.q as string) || ''; // Get search query
    const page = searchParams?.page ? parseInt(searchParams.page as string, 10) : 1;
    const currentPage = isNaN(page) || page < 1 ? 1 : page; // Validate page number

    // Fetch paginated search results
    const { results: searchResults, totalPages } = await searchNovels(query, currentPage, ITEMS_PER_PAGE);

    // Construct base path including the query for pagination links
    const basePath = `/tim-kiem?q=${encodeURIComponent(query)}`;

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4 border-b pb-2">
                Kết quả tìm kiếm cho: <span className="text-blue-700">{query || '...'}</span>
            </h1>

            {query && searchResults.length > 0 && (
                 <p className="text-sm text-gray-600 mb-4">Tìm thấy {searchResults.length * currentPage} / {searchResults.length * totalPages} kết quả ( Trang {currentPage} / {totalPages}).</p>
            )}

            {query && searchResults.length > 0 ? (
                 <>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {searchResults.map((novel) => (
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
                <p>{query ? 'Không tìm thấy truyện nào phù hợp.' : 'Vui lòng nhập từ khóa để tìm kiếm.'}</p>
            )}
        </div>
    );
};

export default SearchPage; 