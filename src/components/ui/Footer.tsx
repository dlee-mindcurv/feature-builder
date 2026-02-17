import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative mt-auto bg-gradient-to-r from-pink-400 to-pink-600 dark:from-pink-900 dark:to-pink-800">
      {/* Wave SVG Top Border */}
      <svg
        className="absolute top-0 left-0 w-full h-8 -translate-y-full text-pink-400 dark:text-pink-900"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>

      <div className="container mx-auto px-4 py-8">
        {/* Desktop: Horizontal Layout | Mobile: Vertical Stacked */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
          {/* Brand Section */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold text-white drop-shadow-md">
              TaskFlow
            </h2>
            <p className="text-pink-100 dark:text-pink-200 text-sm mt-1">
              &copy; TaskFlow 2026
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
              <li>
                <Link
                  href="/"
                  className="text-white font-medium hover:text-pink-100 focus:text-pink-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500 rounded px-2 py-1 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white font-medium hover:text-pink-100 focus:text-pink-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500 rounded px-2 py-1 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-white font-medium hover:text-pink-100 focus:text-pink-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500 rounded px-2 py-1 transition-colors duration-200"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
