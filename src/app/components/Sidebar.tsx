"use client";

import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-gray-900 text-white transform transition-transform duration-300 z-50 lg:relative lg:top-auto lg:h-full lg:translate-x-0 lg:bg-gray-800 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <nav className="flex flex-col gap-4 p-6">
          <Link
            href="/"
            className="text-lg hover:text-gray-300 transition-colors"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            href="/hello-mars"
            className="text-lg hover:text-gray-300 transition-colors"
            onClick={onClose}
          >
            Mars
          </Link>
        </nav>
      </aside>
    </>
  );
}
