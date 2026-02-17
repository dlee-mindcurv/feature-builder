'use client';

import Link from 'next/link';
import { useState, FormEvent } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    if (!email.trim()) {
      setError('Email is required');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (validateEmail(email)) {
      // Simulate successful submission
      setIsSubmitted(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-r from-pink-400 to-pink-600 dark:from-pink-900 dark:to-pink-800 mt-auto">
      {/* Funky wave SVG top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white dark:fill-gray-900"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Desktop: horizontal layout, Mobile: vertical/centered */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 text-white">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-wide animate-pulse">
              TaskFlow
            </h2>
            <p className="text-sm mt-2 text-pink-50 dark:text-pink-200">
              &copy; TaskFlow 2026
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row gap-4 md:gap-6 text-center md:text-left">
            <Link
              href="/"
              className="text-white hover:text-pink-100 dark:hover:text-pink-300 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500 rounded px-2 py-1"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-pink-100 dark:hover:text-pink-300 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500 rounded px-2 py-1"
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="text-white hover:text-pink-100 dark:hover:text-pink-300 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500 rounded px-2 py-1"
            >
              Privacy
            </Link>
          </nav>
        </div>

        {/* Newsletter Signup Section */}
        <div className="mt-8 pt-6 border-t border-pink-300 dark:border-pink-700">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Stay in the loop
            </h3>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500"
                    aria-label="Email address"
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={error ? 'email-error' : undefined}
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-pink-700 hover:bg-pink-800 dark:bg-pink-600 dark:hover:bg-pink-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500"
                  >
                    Subscribe
                  </button>
                </div>
                {error && (
                  <p
                    id="email-error"
                    className="text-sm text-pink-100 dark:text-pink-200 text-left sm:text-center"
                    role="alert"
                  >
                    {error}
                  </p>
                )}
              </form>
            ) : (
              <p
                className="text-lg text-white font-medium py-4"
                role="status"
              >
                Thanks for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-pink-300 dark:border-pink-700">
          <a
            href="https://github.com/taskflow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit TaskFlow on GitHub"
            className="text-white hover:text-pink-100 dark:hover:text-pink-200 transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500 rounded"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/taskflow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit TaskFlow on Twitter"
            className="text-white hover:text-pink-100 dark:hover:text-pink-200 transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500 rounded"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/company/taskflow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit TaskFlow on LinkedIn"
            className="text-white hover:text-pink-100 dark:hover:text-pink-200 transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500 rounded"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://discord.gg/taskflow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit TaskFlow on Discord"
            className="text-white hover:text-pink-100 dark:hover:text-pink-200 transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500 rounded"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
            </svg>
          </a>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-6 pt-6 border-t border-pink-300 dark:border-pink-700">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group flex items-center gap-2 px-6 py-3 min-h-[44px] bg-white dark:bg-pink-200 text-pink-600 dark:text-pink-900 font-medium rounded-full shadow-md hover:bg-pink-50 dark:hover:bg-pink-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500"
          >
            <svg
              className="w-5 h-5 group-hover:animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
