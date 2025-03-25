"use client";

import React from "react";
import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useRouter, usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "about" },
    
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto xl:justify-between xl:px-1">
        {/* Logo */}
        <NextLink href="/">
          <span className="flex items-center space-x-2 text-4xl font-bold text-red-700 cursor-pointer">
            <span>RAGKKUCHAT</span>
          </span>
        </NextLink>

        <Disclosure>
          {({ open }) => (
            <div>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md xl:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 xl:hidden">
                <div>
                  {navigation.map((item, index) =>
                    item.href === "/" ? (
                      <NextLink
                        key={index}
                        href="/"
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {item.name}
                      </NextLink>
                    ) : (
                      <ScrollLink
                        key={index}
                        to={item.href}
                        smooth={true}
                        spy={true}
                        offset={-70}
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none cursor-pointer"
                      >
                        {item.name}
                      </ScrollLink>
                    )
                  )}
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>

        {/* Desktop Menu */}
        <div className="hidden text-center xl:flex xl:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none xl:pt-0 xl:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                {menu.href === "/" ? (
                  <NextLink
                    href="/"
                    className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                  >
                    {menu.name}
                  </NextLink>
                ) : (
                  <ScrollLink
                    to={menu.href}
                    smooth={true}
                    spy={true}
                    offset={-70}
                    className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 cursor-pointer"
                  >
                    {menu.name}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </div>
        
      </nav>
    </div>
  );
}
