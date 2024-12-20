/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";


const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return pathname === path;
  };

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white border-gray-200 py-2.5 shadow-md dark:bg-gray-900 `}
    >
      <div className="container flex flex-wrap items-center justify-between px-3 md:px-5 mx-auto">
        <div  className=" h-[63px] items-center w-[150px]">
          <Link href="/">
           <img src="./mm-removebg-preview.png" height="100%" width="100%" className="object-cover object-center h-full w-full" alt="" />
          </Link>
        </div>
        <div className="flex items-center lg:order-2">
          <Link
            href="/contact"
            className="text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
          >
            Contact
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-20 lg:mt-0">
            <li>
              <Link
                href="/"
                className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${
                  isActive("/")
                    ? "text-blue-500 font-bold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${
                  isActive("/about")
                    ? "text-blue-500 font-bold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${
                  isActive("/blog")
                    ? "text-blue-500 font-bold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${
                  isActive("/team")
                    ? "text-blue-500 font-bold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                Team Members
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${
                  isActive("/contact")
                    ? "text-blue-500 font-bold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
