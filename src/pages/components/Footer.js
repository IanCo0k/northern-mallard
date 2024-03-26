import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-green-900 p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-2xl font-bold text-gray-200">
            <img src="https://northern-mallard.netlify.app/assets/logo-TbfS81ud.png" alt="Logo" className="w-12 inline-block mr-2 border-5 border-orange-800" />Northern Mallard
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a
                href="#"
                className="text-gray-200 hover:bg-gray-700 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-200 hover:bg-gray-700 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Our Team
              </a>
              <a
                href="#"
                className="text-gray-200 hover:bg-gray-700 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Shop
              </a>
              <a
                href="#"
                className="text-gray-200 hover:bg-gray-700 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
