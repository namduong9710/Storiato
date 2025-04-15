import { Novel, ChapterInfo, ChapterContent, NovelCardInfo } from '@/types';

// Determine the base URL for the API
// - Use NEXT_PUBLIC_API_URL environment variable if available (recommended)
// - Fallback to a default localhost URL for local development
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'; // Adjust port/path if needed

// Helper function for handling fetch responses
async function handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        // Try to parse error details from the backend if available
        let errorDetails = 'An error occurred';
        try {
            const errorData = await response.json();
            errorDetails = errorData.message || errorData.title || JSON.stringify(errorData);
        } catch {
            // No need to use the error object 'e' here
            errorDetails = `HTTP error! status: ${response.status}`;
        }
        console.error("API Error:", errorDetails);
        throw new Error(errorDetails);
    }
    // Check if the response is empty (status 204 No Content)
    if (response.status === 204) {
      return undefined as T; // Or return null, depending on expected behavior
    }
    return response.json() as Promise<T>;
}

// --- API Functions ---

// Example: Get Novel Details
export async function getNovelDetails(slug: string): Promise<Novel | null> {
    try {
        console.log(`API: Fetching novel details for slug: ${slug}`); // Keep console log for debugging
        const response = await fetch(`${API_BASE_URL}/novels/${slug}`); // Adjust endpoint as needed
        return await handleResponse<Novel>(response);
    } catch (error) {
        console.error(`Failed to fetch novel details for ${slug}:`, error);
        // Return null or re-throw depending on how you want to handle errors upstream
        return null;
    }
}

// Example: Get Chapters for a Novel
export async function getNovelChapters(novelSlug: string): Promise<ChapterInfo[]> {
    try {
        console.log(`API: Fetching chapters for novel: ${novelSlug}`);
        // TODO: Add pagination query params if needed (e.g., ?page=1&pageSize=100)
        const response = await fetch(`${API_BASE_URL}/novels/${novelSlug}/chapters`); // Adjust endpoint
        return await handleResponse<ChapterInfo[]>(response);
    } catch (error) {
        console.error(`Failed to fetch chapters for ${novelSlug}:`, error);
        return []; // Return empty array on error
    }
}

// Example: Get Specific Chapter Content
export async function getChapterDetails(novelSlug: string, chapterSlug: string): Promise<ChapterContent | null> {
     try {
        console.log(`API: Fetching chapter ${chapterSlug} for novel: ${novelSlug}`);
        const response = await fetch(`${API_BASE_URL}/novels/${novelSlug}/chapters/${chapterSlug}`); // Adjust endpoint
        return await handleResponse<ChapterContent>(response);
    } catch (error) {
        console.error(`Failed to fetch chapter ${chapterSlug} for ${novelSlug}:`, error);
        return null;
    }
}

// Example: Get Hot Novels (adjust endpoint and return type as needed)
export async function getHotNovels(): Promise<NovelCardInfo[]> {
     try {
        console.log(`API: Fetching hot novels`);
        // TODO: Add pagination/limit query params if needed
        const response = await fetch(`${API_BASE_URL}/novels/hot`); // Adjust endpoint
        return await handleResponse<NovelCardInfo[]>(response);
    } catch (error) {
        console.error(`Failed to fetch hot novels:`, error);
        return [];
    }
}

// TODO: Add functions for:
// - Searching novels
// - Fetching novels by genre
// - User authentication (login, register)
// - User library management (add/remove novels)
// - Posting ratings/reviews 