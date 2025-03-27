"use client";

import React from "react";
import NextLink from "next/link";

export default function Navbarchat() {
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto xl:justify-between xl:px-1">
        {/* Logo */}
        <NextLink href="/">
          <span className="flex items-center space-x-2 text-4xl font-bold text-blue-600 cursor-pointer">
            <span>RAGKKUCHAT</span>
          </span>
        </NextLink>
      </nav>
    </div>
  );
}
