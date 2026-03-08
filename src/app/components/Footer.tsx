export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">
            © 2026 MyApp. All rights reserved.
          </p>
          <ul className="flex gap-6 text-sm">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
