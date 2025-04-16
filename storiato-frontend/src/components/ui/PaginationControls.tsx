import React from 'react';
import Link from 'next/link';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  basePath: string; // e.g., /the-loai/tien-hiep
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  basePath,
}) => {
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  if (totalPages <= 1) {
    return null; // Don't show controls if only one page
  }

  return (
    <div className="flex justify-center items-center space-x-4 mt-8 mb-4">
      <Link
        href={hasPreviousPage ? `${basePath}?page=${currentPage - 1}` : '#'}
        className={`px-4 py-2 border rounded text-sm ${          hasPreviousPage
            ? 'bg-white text-blue-600 hover:bg-gray-100'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
        aria-disabled={!hasPreviousPage}
      >
        Trang trước
      </Link>

      <span className="text-sm text-gray-700">
        Trang {currentPage} / {totalPages}
      </span>

      <Link
        href={hasNextPage ? `${basePath}?page=${currentPage + 1}` : '#'}
        className={`px-4 py-2 border rounded text-sm ${          hasNextPage
            ? 'bg-white text-blue-600 hover:bg-gray-100'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
        aria-disabled={!hasNextPage}
      >
        Trang sau
      </Link>
    </div>
  );
};

export default PaginationControls; 