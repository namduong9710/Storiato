import React from 'react';

interface ChapterContentDisplayProps {
  content: string; // Assuming content is HTML string from backend
}

const ChapterContentDisplay: React.FC<ChapterContentDisplayProps> = ({ content }) => {
  return (
    <div className="reading-content max-w-3xl mx-auto px-4 py-6">
      {/* Use prose for typography defaults, customize as needed */}
      <div
        className="prose dark:prose-invert prose-lg lg:prose-xl max-w-none font-serif" // Example: Use serif font, adjust size
        dangerouslySetInnerHTML={{ __html: content }} // Render HTML content
      />
      {/*
        SECURITY NOTE: dangerouslySetInnerHTML is risky if the HTML content
        is not properly sanitized on the backend to prevent XSS attacks.
        Ensure the backend API cleans the chapter content before sending it.
        Alternatively, parse and sanitize the HTML on the frontend,
        or use a markdown format if possible.
      */}
    </div>
  );
};

export default ChapterContentDisplay; 