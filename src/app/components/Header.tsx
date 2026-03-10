"use client";

import Link from "next/link";
import MenuIcon from "./svg/MenuIcon";

interface HeaderProps {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="bg-gray-800 text-white shadow-lg relative z-30">
      <nav className="container mx-auto pl-6 pr-4 py-4 flex items-center">
        <Link href="/" className="text-2xl font-bold hover:text-gray-300">
          MyApp
        </Link>
        <ul className="hidden lg:flex gap-6 ml-auto">
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
      </nav>
      <button
        onClick={onToggleSidebar}
        className="lg:hidden absolute top-0 right-0 p-4 hover:bg-gray-700 rounded transition-colors"
        aria-label="Toggle sidebar"
      >
        <MenuIcon />
      </button>
    </header>
  );
}
