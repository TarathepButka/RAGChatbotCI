"use client";

import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "about" },
  ];

  const router = useRouter();

  return (
    <nav className="bg-[#1b1b20] fixed w-full z-20 top-0 start-0 border-b border-gray-600 py-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <NextLink href="/">
          <span className="flex items-center space-x-2 text-4xl font-bold text-blue-600 cursor-pointer">
            <span>RAGKKUCHAT</span>
          </span>
        </NextLink>
        <div className="flex md:order-2 space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text- px-4 py-2 text-center cursor-pointer"
            onClick={() => router.push("/chat")}
          >
            Let's Chat
          </button>
        </div>
        <div className="text-lg items-center justify-between w-full md:flex md:w-auto md:order-1 hidden lg:flex">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg bg-[#1b1b20] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Our Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
