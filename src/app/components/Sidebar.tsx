"use client";

import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen ? (
        <button
          className="fixed inset-0 z-40 bg-black/50 cursor-default"
          onClick={onClose}
          aria-hidden="true"
          tabIndex={-1}
        />
      ) : null}
      <aside
        className={`fixed right-0 top-0 h-screen w-64 bg-gray-900 text-white transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="cursor-pointer text-white hover:text-gray-300 transition-colors"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
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
