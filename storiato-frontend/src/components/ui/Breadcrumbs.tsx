import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid'; // Using Heroicons (needs install if not present)

interface BreadcrumbItem {
  label: string;
  href?: string; // Optional href for the last item or non-links
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <ol className="container mx-auto px-4 py-2 flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
        <li>
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Trang chủ
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gray-400 dark:text-gray-500 mx-1" aria-hidden="true" />
            {item.href && index < items.length -1 ? ( // Check if it's not the last item
              <Link
                href={item.href}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            ) : (
              // Render last item as text or non-link item
              <span className="font-medium text-gray-700 dark:text-gray-300" aria-current={index === items.length - 1 ? 'page' : undefined}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 