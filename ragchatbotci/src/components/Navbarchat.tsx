"use client";

import React from "react";
import NextLink from "next/link";

export default function Navbarchat() {
  return (
    <div className="w-full">
      <nav className="bg-[#1b1b20] fixed w-full z-20 top-0 start-0 border-b border-gray-600 py-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        {/* Logo */}
        <NextLink href="/" className="flex items-center space-x-2">
          <span className="text-4xl font-bold text-blue-600 cursor-pointer">
            RAGKKUCHAT
          </span>
        </NextLink>
        </div>
      </nav>
    </div>
  );
}
