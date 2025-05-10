import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import GenreNavBar from "@/components/layout/GenreNavBar"; // Keep commented out or remove if Header replaces it
import React from 'react';
// import { ThemeProvider } from "@/context/ThemeContext"; // Remove if theme handled in Header

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Storiato - Read Stories Online",
  description: "Read your favorite stories online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <Header />
        {/* <GenreNavBar/> Remove or keep based on final design */}
        <main className="flex-grow">
          {/* Container applied within page.tsx now, remove from layout? Or keep for consistency? Keep for now. */}
          {/* <div className="container mx-auto px-4 py-6"> */}
            {children}
          {/* </div> */}
        </main>
        <Footer />
      </body>
    </html>
  );
}