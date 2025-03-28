"use client";

import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const navigation = [
    { name: "Home", href: "home" },
    { name: "Services", href: "services" },
    { name: "About", href: "about" },
    { name: "Our Team", href: "team" },
  ];

  const router = useRouter();

  return (
    <nav className="bg-[#1b1b20] fixed w-full z-20 top-0 start-0 border-b border-gray-600 py-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        {/* Logo */}
        <NextLink href="/" className="flex items-center space-x-2">
          <span className="text-4xl font-bold text-blue-600 cursor-pointer">
            RAGKKUCHAT
          </span>
        </NextLink>

        {/* Chat Button */}
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-lg px-4 py-2 cursor-pointer"
            onClick={() => router.push("/chat")}
          >
            Let's Chat
          </button>
        </div>

        {/* Navigation Links */}
        <div className="text-lg items-center justify-between w-full md:flex md:w-auto md:order-1 hidden lg:flex">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg bg-[#1b1b20] md:space-x-8 md:flex-row md:mt-0 md:border-0">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.href === "home" ? (
                  <ScrollLink
                    to={item.href}
                    smooth={true}
                    duration={800}
                    spy={true}
                    offset={-300}
                    className="block py-2 px-3 text-gray-300 hover:text-blue-500 cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <ScrollLink
                    to={item.href}
                    smooth={true}
                    duration={800}
                    spy={true}
                    offset={-120}
                    className="block py-2 px-3 text-gray-300 hover:text-blue-500 cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
