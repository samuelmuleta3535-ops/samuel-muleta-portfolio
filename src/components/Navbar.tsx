
"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

function getThemeSnapshot(): Theme {
  const savedTheme = localStorage.getItem("portfolio-theme");
  return savedTheme === "light" ? "light" : "dark";
}

function getServerThemeSnapshot(): Theme {
  return "dark";
}

function subscribeToTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio-theme-change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("portfolio-theme-change", callback);
  };
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const newTheme: Theme = theme === "dark" ? "light" : "dark";

    localStorage.setItem("portfolio-theme", newTheme);
    document.documentElement.dataset.theme = newTheme;

    window.dispatchEvent(new Event("portfolio-theme-change"));
  }

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-[#080d1a]/95 dark:shadow-none"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

        {/* Website Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="rounded-sm text-xl font-bold text-gray-900 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-white dark:hover:text-blue-400 dark:focus-visible:ring-blue-400"
        >
          Samuel<span className="text-blue-600 dark:text-blue-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-sm text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-300 dark:hover:text-blue-400 dark:focus-visible:ring-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Theme and Mobile Menu Buttons */}
        <div className="flex items-center gap-3">

          {/* Light / Dark Mode Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            aria-pressed={theme === "light"}
            title={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-gray-800 shadow-sm transition duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-white/10 dark:bg-[#101b32] dark:text-yellow-300 dark:hover:border-blue-400 dark:hover:bg-blue-500/20 dark:hover:text-blue-300 dark:focus-visible:ring-blue-400"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.42 1.42" />
                <path d="m17.65 17.65 1.42 1.42" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.35 17.65-1.42 1.42" />
                <path d="m19.07 4.93-1.42 1.42" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6.5 6.5 0 0 0 8.268 8.268c.344-.215.825-.003.803.401" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="rounded-md border border-gray-300 bg-gray-100 px-2 py-1 text-2xl text-gray-800 transition-colors hover:border-blue-500 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden dark:border-white/10 dark:bg-[#101b32] dark:text-white dark:hover:text-blue-400 dark:focus-visible:ring-blue-400"
          >
            <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        hidden={!menuOpen}
        className="flex flex-col gap-5 border-t border-gray-200 bg-white px-6 py-5 md:hidden dark:border-white/10 dark:bg-[#080d1a]"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="rounded-sm text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-300 dark:hover:text-blue-400 dark:focus-visible:ring-blue-400"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
