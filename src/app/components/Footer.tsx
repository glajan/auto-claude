export default function Footer() {
  return (
    <footer className="bg-base-300 text-base-content shadow-lg">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-base-content/60">
            © 2026 MyApp. All rights reserved.
          </p>
          <ul className="flex gap-6 text-sm">
            <li>
              <a href="#" className="link link-hover text-base-content/60">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover text-base-content/60">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover text-base-content/60">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
