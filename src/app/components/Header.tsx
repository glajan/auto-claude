import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold hover:text-gray-300">
          MyApp
        </Link>
        <ul className="flex gap-6">
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
    </header>
  );
}
