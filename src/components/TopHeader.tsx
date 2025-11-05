"use client";
import React from "react";
import Link from "next/link";
import { navlinks } from "@/constants/navlinks";
import { twMerge } from "tailwind-merge";

export const TopHeader = () => {
  return (
    <header className="w-full bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center space-x-3">
          <span className="font-bold text-lg text-primary">Hauris Choudhry</span>
          <span className="text-sm text-secondary hidden md:inline">Developer</span>
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          {navlinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={twMerge(
                "text-sm text-secondary hover:text-primary transition",
                "px-2 py-1 rounded"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
