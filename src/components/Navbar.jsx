import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md bg-white/90">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-blue-600 tracking-tight">
        Halo<span className="text-blue-800">Sehat</span>
      </h1>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium text-sm">
        <li>
          <a
            href="#home"
            className="hover:text-blue-600 transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="hover:text-blue-600 transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-blue-600 transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
