import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 text-gray-600 text-center py-4 mt-8 border-t">
      <div className="container mx-auto px-4">
        <p>&copy; {currentYear} Storiato. All rights reserved.</p>
        {/* TODO: Add links (Contact, Privacy Policy, Terms) */}
        <p className="text-sm mt-1">
          Inspired by TruyenFull - Read stories online.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 