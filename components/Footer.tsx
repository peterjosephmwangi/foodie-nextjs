"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">About Us</h2>
          <p className="text-sm">
            Foodie is your go-to platform for discovering amazing culinary experiences. 
            Explore our services, check out our gallery, and get in touch to know more!
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-orange-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-orange-500">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Contact Us</h2>
          <ul className="space-y-2">
            <li>123 Foodie Street, Culinary City</li>
            <li>Email: contact@foodie.com</li>
            <li>Phone: +123-456-7890</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="hover:text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.54 6.42a8.53 8.53 0 01-2.46.67 4.27 4.27 0 001.87-2.36 8.58 8.58 0 01-2.72 1.04 4.27 4.27 0 00-7.28 3.89 12.12 12.12 0 01-8.8-4.46 4.27 4.27 0 001.32 5.7 4.2 4.2 0 01-1.93-.53v.05a4.27 4.27 0 003.42 4.19 4.27 4.27 0 01-1.92.07 4.27 4.27 0 003.99 2.97 8.56 8.56 0 01-5.3 1.83A8.6 8.6 0 012 19.13a12.09 12.09 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56a8.65 8.65 0 002.12-2.22z" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.36 2H5.64C3.64 2 2 3.64 2 5.64v12.72C2 20.36 3.64 22 5.64 22h12.72c2 0 3.64-1.64 3.64-3.64V5.64C22 3.64 20.36 2 18.36 2zm-1.23 4.17h2.45V9.6h-2.45v10.25H8.87V9.6H6.43V6.17h2.44V4.38c0-1.71.88-4.18 4.16-4.18h3.49v3.17h-2.54c-.46 0-1.11.22-1.11.93v2.08z" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.98 3.64 9.1 8.44 9.94v-7.04H8.9v-2.9h1.58v-1.55c0-1.56.94-2.42 2.35-2.42.67 0 1.24.05 1.4.07v1.62h-.96c-.76 0-.91.36-.91.9v1.38h1.82l-.24 2.9h-1.58v7.04c4.8-.84 8.44-4.96 8.44-9.94 0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
