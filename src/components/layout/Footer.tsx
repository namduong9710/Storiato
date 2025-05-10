import React from 'react';
import Link from 'next/link';
// Example using simple SVGs for social icons (replace with better icons/library if desired)
const FacebookIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>;
const TwitterIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.429.734-.666 1.584-.666 2.477 0 2.086 1.06 3.922 2.671 4.995-.973-.031-1.888-.297-2.688-.743v.079c0 2.912 2.07 5.338 4.816 5.904-.504.136-1.041.209-1.595.209-.387 0-.762-.038-1.132-.108.766 2.389 2.988 4.13 5.63 4.179-2.056 1.61-4.641 2.571-7.458 2.571-.485 0-.963-.028-1.433-.084 2.658 1.711 5.824 2.711 9.255 2.711 11.099 0 17.17-9.196 17.17-17.17 0-.262-.006-.523-.018-.783a12.314 12.314 0 003.025-3.145z"/></svg>;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Links Section */}
          <div>
            <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link></li>
              {/* Add more links as needed */}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Newsletter</h5>
            <p className="text-sm mb-3">Stay updated with the latest stories and features.</p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-grow px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-l bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-r text-sm font-medium"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Social Media */}
          <div>
             <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="hover:text-blue-600 dark:hover:text-blue-400"><FacebookIcon /></a>
                <a href="#" aria-label="Twitter" className="hover:text-blue-600 dark:hover:text-blue-400"><TwitterIcon /></a>
                {/* Add more social icons */}
              </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm border-t border-gray-200 dark:border-gray-700 pt-6">
           <p>&copy; {currentYear} Storiato. All rights reserved.</p>
           <p className="mt-1">Inspired by TruyenFull - Read stories online.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 