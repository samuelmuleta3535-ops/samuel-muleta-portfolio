
"use client";

import Image from "next/image";
import { translations } from "@/lib/translations";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  useLanguage,
  type Language,
} from "@/components/LanguageProvider";

type Theme = "light" | "dark";

const navLinks = [
  {
    name: "Home",
    href: "#home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        className="h-4 w-4">
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v12h14V9" />
        <path d="M9 21v-7h6v7" />
      </svg>
    ),
  },
  {
    name: "About",
    href: "#about",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        className="h-4 w-4">
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21a7 7 0 0 1 14 0" />
      </svg>
    ),
  },
  {
    name: "Skills",
    href: "#skills",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        className="h-4 w-4">
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    ),
  },
  {
    name: "Experience",
    href: "#experience",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        className="h-4 w-4">
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V4h8v3" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    name: "Projects",
    href: "#projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        className="h-4 w-4">
        <path d="M3 7h7l2 2h9v11H3z" />
        <path d="M3 7V5h7l2 2" />
      </svg>
    ),
  },
  {
    name: "Certificates",
    href: "#certificates",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        className="h-4 w-4">
        <circle cx="12" cy="8" r="6" />
        <path d="m8.5 13-1 8 4.5-2.5 4.5 2.5-1-8" />
      </svg>
    ),
  },
  {
    name: "Contact",
    href: "#contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        className="h-4 w-4">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
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
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const profileText = {
    en: {
      button: "Profile",
      title: "Personal Profile",
      name: "Name",
      education: "Education",
      university: "University",
      preference: "Work Preference",
      location: "Location",
      specialization: "Specialization",
      email: "Email Address",
      close: "Close",
    },
    om: {
      button: "Odeeffannoo",
      title: "Odeeffannoo Dhuunfaa",
      name: "Maqaa",
      education: "Barnoota",
      university: "Yuunivarsiitii",
      preference: "Filannoo Hojii",
      location: "Bakka",
      specialization: "Ogummaa Addaa",
      email: "Teessoo Email",
      close: "Cufi",
    },
    am: {
      button: "መገለጫ",
      title: "የግል መገለጫ",
      name: "ስም",
      education: "ትምህርት",
      university: "ዩኒቨርሲቲ",
      preference: "የሥራ ምርጫ",
      location: "አካባቢ",
      specialization: "ልዩ ሙያ",
      email: "የኢሜይል አድራሻ",
      close: "ዝጋ",
    },
  }[language];

  // Apply the selected theme
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Close the profile popup when clicking outside it
  useEffect(() => {
    if (!profileOpen) return;

    function handleOutsideClick(event: PointerEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [profileOpen]);

  // Close the profile popup with Escape
  useEffect(() => {
    if (!profileOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setProfileOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [profileOpen]);

  function toggleTheme() {
    const newTheme: Theme = theme === "dark" ? "light" : "dark";

    localStorage.setItem("portfolio-theme", newTheme);
    document.documentElement.dataset.theme = newTheme;

    window.dispatchEvent(new Event("portfolio-theme-change"));
  }

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-[#080d1a]/95 dark:shadow-none"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

          {/* Original Profile Logo - Position Preserved */}
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              aria-label="Samuel Muleta - Home"
              className="group flex items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Image
                src="/images/profile-new.jpg"
                alt="Samuel Muleta"
                width={44}
                height={44}
                priority
                className="h-11 w-11 rounded-full border-2 border-blue-500 object-cover shadow-md transition duration-300 group-hover:scale-110 group-hover:border-blue-400"
              />
            </a>

            {/* Profile Button */}
            <button
              type="button"
              onClick={() => setProfileOpen((previous) => !previous)}
              aria-expanded={profileOpen}
              aria-haspopup="dialog"
              className="inline-flex items-center gap-1.5 rounded-full border border-blue-600 bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-700 hover:bg-blue-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:scale-95 dark:border-blue-500 dark:bg-blue-600 dark:hover:border-blue-400 dark:hover:bg-blue-500 sm:px-4 sm:text-sm"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M5 21a7 7 0 0 1 14 0" />
              </svg>

              {profileText.button}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 rounded-md text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-300 dark:hover:text-blue-400 dark:focus-visible:ring-blue-400"
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {link.icon}
                </span>

                {t.nav[link.name.toLowerCase() as keyof typeof t.nav]}
              </a>
            ))}
          </div>

          {/* Theme and Mobile Menu Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Language Selector */}
            <div className="relative">
              <select
                value={language}
                onChange={(event) =>
                  setLanguage(event.target.value as Language)
                }
                aria-label="Select website language"
                className="h-10 cursor-pointer rounded-full border border-gray-300 bg-gray-100 px-2 text-sm font-semibold text-gray-800 shadow-sm outline-none transition hover:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-white/10 dark:bg-[#101b32] dark:text-white sm:px-3"
              >
                <option value="en">EN</option>
                <option value="om">OM</option>
                <option value="am">አማ</option>
              </select>
            </div>

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
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-gray-800 shadow-sm transition duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-white/10 dark:bg-[#101b32] dark:text-yellow-300 dark:hover:border-blue-400 dark:hover:bg-blue-500/20 dark:hover:text-blue-300 dark:focus-visible:ring-blue-400"
            >
              {theme === "dark" ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[21px] w-[21px]"
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
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[21px] w-[21px]"
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
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center gap-3 rounded-md text-sm font-medium text-gray-700 transition-all duration-300 hover:translate-x-1 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-300 dark:hover:text-blue-400 dark:focus-visible:ring-blue-400"
            >
              <span className="text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:text-blue-400">
                {link.icon}
              </span>

              {t.nav[link.name.toLowerCase() as keyof typeof t.nav]}
            </a>
          ))}
        </div>
      </nav>

      {/* Small Personal Profile Popup - No Background Blur */}
      {profileOpen && (
        <div className="pointer-events-none fixed inset-0 z-[100]">
          <div
            ref={profileRef}
            className="pointer-events-auto absolute left-3 top-20 w-[calc(100vw-24px)] max-w-[340px] overflow-y-auto rounded-xl border border-gray-200 bg-white p-4 shadow-xl animate-in fade-in slide-in-from-left-2 duration-200 dark:border-white/10 dark:bg-[#101b32] sm:left-5"
            role="dialog"
            aria-modal="false"
            aria-labelledby="profile-modal-title"
            style={{ maxHeight: "calc(100vh - 100px)" }}
          >
            {/* Popup Header */}
            <div className="mb-4 flex items-center justify-between">
              <h2
                id="profile-modal-title"
                className="text-base font-bold text-gray-900 dark:text-white"
              >
                {profileText.title}
              </h2>

              <button
                type="button"
                onClick={() => setProfileOpen(false)}
                aria-label={profileText.close}
                className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-all duration-200 hover:rotate-90 hover:bg-red-100 hover:text-red-600 dark:text-gray-300 dark:hover:bg-red-500/20 dark:hover:text-red-400"
              >
                ✕
              </button>
            </div>

            {/* Profile Information */}
            <div className="space-y-3">
              <ProfileItem
                label={profileText.name}
                value="Samuel Muleta"
              />

              <ProfileItem
                label={profileText.education}
                value="B.Sc. in Computer Science"
              />

              <ProfileItem
                label={profileText.university}
                value="Ambo University"
              />

              <ProfileItem
                label={profileText.preference}
                value="Student & Developer"
              />

              <ProfileItem
                label={profileText.location}
                value="Ethiopia"
              />

              <ProfileItem
                label={profileText.specialization}
                value="Web Development"
              />

              {/* Email */}
              <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-500/10">
                <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">
                  {profileText.email}
                </p>

                <a
                  href="mailto:samuelmuleta3535@gmail.com"
                  className="break-all text-sm font-semibold text-blue-700 transition-colors hover:text-blue-500 hover:underline dark:text-blue-400"
                >
                  samuelmuleta3535@gmail.com
                </a>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setProfileOpen(false)}
              className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md active:scale-95"
            >
              {profileText.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ProfileItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-gray-100 pb-2 last:border-0 dark:border-white/10">
      <p className="mb-1 text-[11px] font-medium text-gray-500 dark:text-gray-400">
        {label}
      </p>

      <p className="text-sm font-semibold leading-5 text-gray-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}
