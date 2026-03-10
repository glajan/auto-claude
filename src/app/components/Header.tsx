"use client";

import Link from "next/link";
import MenuIcon from "./svg/MenuIcon";

interface HeaderProps {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="navbar bg-base-300 shadow-lg relative z-30">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          MyApp
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal hidden lg:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/hello-mars">Mars</Link>
          </li>
        </ul>
        <button
          onClick={onToggleSidebar}
          className="btn btn-ghost btn-square lg:hidden"
          aria-label="Toggle sidebar"
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
