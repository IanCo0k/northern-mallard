import React, { useState } from 'react';
import Link from 'next/link'; // Import Link component from Next.js

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-green-900 p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-2xl font-bold text-gray-200">
            <img src="https://northern-mallard.netlify.app/assets/logo-TbfS81ud.png" alt="Logo" className="w-12 inline-block mr-2 border-5 border-orange-800" />Northern Mallard
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-gray-100 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link className="text-gray-200 hover:bg-gray-700 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium" href="/">
                Home
              </Link>
              <Link className="text-gray-200 hover:bg-gray-700 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium" href="/team">
                Our Team
              </Link>
              <Link className="text-gray-200 hover:bg-gray-700 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium" href="/shop">
                Shop
              </Link>
              <Link className="text-gray-200 hover:bg-gray-700 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium" href="/contact">
                Contact
              </Link>

            </div>
          </div>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link className="text-gray-200 hover:bg-gray-700 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium" href="/">
            Home
          </Link>
          <Link className="text-gray-200 hover:bg-gray-700 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium" href="/team">
            Our Team
          </Link>
          <Link className="text-gray-200 hover:bg-gray-700 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium" href="/shop">
            Shop 
           </Link>
          <Link className="text-gray-200 hover:bg-gray-700 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
