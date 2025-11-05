import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { TopHeader } from "@/components/TopHeader";

const inter = Inter({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

export const metadata: Metadata = {
  title: "John Doe - Developer",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "antialiased min-h-screen bg-gray-100"
        )}
      >
        <TopHeader />
        <main className="max-w-6xl w-full mx-auto py-6 px-4 md:px-6">
          <div className="bg-white rounded-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
