export interface Genre {
  id: number | string; // Use string if slug is the primary ID
  name: string;
  slug: string; // For URL routing (e.g., /the-loai/tien-hiep)
}

export interface Author {
  id: number | string;
  name: string;
  // Add other author details if needed (bio, etc.)
}

export interface ChapterInfo {
  id: number | string;
  chapterNumber: number;
  title?: string; // Optional chapter title
  slug: string; // For URL routing (e.g., /truyen/kiem-lai/doc/1)
  publishDate?: string; // Optional publish date
}

export interface Novel {
  id: number | string; // Or maybe slug is the primary ID
  title: string;
  slug: string; // For URL routing (e.g., /truyen/kiem-lai)
  author: Author;
  genres: Genre[];
  coverImageUrl?: string; // Optional cover image
  synopsis: string;
  rating?: number; // Optional rating (e.g., 0-5 or 0-10)
  status: 'Ongoing' | 'Completed' | 'Dropped';
  totalChapters: number;
  latestChapter?: ChapterInfo; // Info about the most recent chapter
  // Optional: Add fields like view count, last updated date, etc.
}

// Interface for the full chapter content (when reading)
export interface ChapterContent extends ChapterInfo {
  content: string; // The actual text content of the chapter
  novelSlug: string; // To link back to the novel
  novelTitle: string;
  // Add navigation slugs (optional, fetched with content)
  prevChapterSlug?: string | null;
  nextChapterSlug?: string | null;
}

// You might want a simplified version for lists
export interface NovelCardInfo {
  id: number | string;
  title: string;
  slug: string;
  authorName: string;
  coverImageUrl?: string;
  latestChapterNumber?: number;
  genres?: Genre[]; // Maybe just show first 1-2 genres on cards
  rating?: number;
  synopsis?: string; // Add synopsis for listing cards
} 