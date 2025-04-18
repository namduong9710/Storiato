import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Tailwind is imported here
import Header from "@/components/layout/Header"; // Corrected path if alias is set up
import Footer from "@/components/layout/Footer"; // Corrected path if alias is set up
import GenreNavBar from "@/components/layout/GenreNavBar"; // Import GenreNavBar
import React from 'react'; // Added React import
import { ThemeProvider } from "@/context/ThemeContext"; // Import ThemeProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Storiato - Read Stories Online",
  description: "Read your favorite stories online.", // Basic description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> {/* Add suppressHydrationWarning */}
      <ThemeProvider> {/* Wrap with ThemeProvider */}
        <body className={`${inter.className} flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}> {/* Add default bg/dark:bg and transition */}
          <Header /> {/* Add Header */}
          <GenreNavBar /> {/* Add GenreNavBar below Header */}
          <main className="flex-grow container mx-auto px-4 py-6">
            {children} {/* Page content will be rendered here */}
          </main>
          <Footer /> {/* Add Footer */}
        </body>
      </ThemeProvider>
    </html>
  );
} 