"use client";

import Link from "next/link";
import CloseIcon from "./svg/CloseIcon";

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
        className={`fixed right-0 top-0 h-screen w-64 bg-base-200 text-base-content transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="btn btn-ghost btn-circle btn-sm"
          >
            <CloseIcon />
          </button>
        </div>
        <ul className="menu p-4 gap-2">
          <li>
            <Link href="/" onClick={onClose}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/hello-mars" onClick={onClose}>
              Mars
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
