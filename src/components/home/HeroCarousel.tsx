"use client";

import React from 'react';
import Slider from "react-slick"; // Import Slider component
import Image from 'next/image';
import Link from 'next/link';
import { NovelCardInfo } from '@/types'; // Using simplified info for now

// Define FeaturedStory interface first
interface FeaturedStory extends NovelCardInfo {
    synopsis?: string;
}

// Type the mock data array explicitly as FeaturedStory[]
const featuredStories: FeaturedStory[] = [ // <--- Explicit Type Here
   {
    id: 'kiem-lai-feat',
    title: 'Kiếm Lai',
    slug: 'kiem-lai',
    authorName: 'Phong Hỏa Hí Chư Hầu',
    coverImageUrl: '/placeholder-cover.jpg', // Replace with actual banner images later
    genres: [{ id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' }],
    // Add a short synopsis for the banner
    synopsis: 'Một thiếu niên mang trong mình thanh kiếm và ước mơ trở thành kiếm tiên mạnh nhất...',
  },
  {
    id: 'than-y-feat',
    title: 'Lưu Đày Thần Y Mang Theo Không Gian Chạy Nạn',
    slug: 'than-y-chay-nan',
    authorName: 'Tác Giả B',
    coverImageUrl: '/placeholder-cover.jpg',
    genres: [{ id: 'xuyen-khong', name: 'Xuyên Không', slug: 'xuyen-khong' }],
    synopsis: 'Xuyên không về thời cổ đại, bị lưu đày và phải dùng y thuật để sinh tồn...',
  },
   {
    id: 'vo-thuong-feat',
    title: 'Vô Thượng Thần Đế',
    slug: 'vo-thuong-than-de',
    authorName: 'Ốc Sên Ký Sinh',
    coverImageUrl: '/placeholder-cover.jpg',
    genres: [{ id: 'tien-hiep', name: 'Tiên Hiệp', slug: 'tien-hiep' }],
    synopsis: 'Con đường trở thành Thần Đế đầy chông gai và thử thách...',
  },
  // Add 2-3 more featured stories
];

const HeroCarousel: React.FC = () => {

  // Slick Slider settings
  const settings = {
    dots: true, // Show dots navigation
    infinite: true, // Loop slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Change slide every 4 seconds
    pauseOnHover: true, // Pause autoplay on hover
     appendDots: (dots: React.ReactNode) => ( // Custom positioning for dots
      <div style={{ position: 'absolute', bottom: '20px' }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => ( // Custom dot style
        <div className="w-3 h-3 bg-white/50 dark:bg-gray-600/50 rounded-full slick-dot-inactive"></div>
    ),
    // Ensure active dot style overrides customPaging in CSS or use !important if needed
  };


  return (
    <section className="hero-carousel mb-8 -mt-6 relative overflow-hidden"> {/* Negative margin to pull up */}
      <Slider {...settings}>
        {featuredStories.map((story) => (
          <div key={story.id} className="relative w-full h-[400px] md:h-[500px]"> {/* Slide container */}
            {/* Background Image */}
            <Image
              src={story.coverImageUrl || '/placeholder-cover.jpg'}
              alt={`Banner for ${story.title}`}
              fill
              className="object-cover object-center brightness-50 dark:brightness-[0.4]" // Darken image for text contrast
              priority={featuredStories.indexOf(story) === 0} // Prioritize loading first image
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4 md:p-8 bg-gradient-to-t from-black/50 via-transparent to-transparent">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 leading-tight shadow-text">
                  {story.title}
                </h2>
                <p className="text-sm md:text-base mb-4 md:mb-6 line-clamp-2 md:line-clamp-3 shadow-text">
                  {story.synopsis || 'Đọc ngay để khám phá câu chuyện hấp dẫn này!'}
                </p>
                <Link
                  href={`/truyen/${story.slug}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 md:py-3 md:px-6 rounded-full transition-colors text-sm md:text-base"
                >
                  Đọc Ngay
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
       {/* Add some global CSS for active slick dots if customPaging doesn't get overridden */}
       <style jsx global>{`
        .slick-dots li.slick-active div {
          background-color: white !important; /* Ensure active dot is white */
          dark:background-color: #cbd5e1 !important; /* Example dark mode active dot */
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;

// Helper CSS class for text shadow (optional, add to globals.css if preferred)
/*
.shadow-text {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
}
*/ 