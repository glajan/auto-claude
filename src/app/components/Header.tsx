"use client";

import Link from "next/link";

interface HeaderProps {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="bg-gray-800 text-white shadow-lg relative z-30">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold hover:text-gray-300">
          MyApp
        </Link>
        <div className="flex items-center gap-6">
          <ul className="hidden lg:flex gap-6">
            <li>
              <Link
                href="/"
                className="text-lg hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/hello-mars"
                className="text-lg hover:text-gray-300 transition-colors"
              >
                Mars
              </Link>
            </li>
          </ul>
          <button
            onClick={onToggleSidebar}
            className="p-2 hover:bg-gray-700 rounded transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
